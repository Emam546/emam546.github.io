import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import closeModal from "../images/close.svg";
import ImageNext from "next/image";
import { NextPage } from "next";
import classNames from "classnames";
export interface Props {
    technologies: string;
    title: string;
    image: string;
    color: string;
    id: number;
    github?: string;
    deployed?: string;
    description: string;
}
function toBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
    return new Promise((resolve) => {
        canvas.toBlob(resolve);
    });
}
const Project: NextPage<Props> = ({
    technologies,
    title,
    image,
    color,
    id,
    github,
    deployed,
    description,
}) => {
    const [bloburl, setBlobUrl] = useState<string>();
    useEffect(() => {
        const baseImage = new Image();
        baseImage.src = "./baseImage.png";
        baseImage.onload = () => {
            const overlayImage = new Image();
            overlayImage.src = image;

            const drawImages = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (!ctx) return;
                // Set the canvas dimensions to match the base image
                canvas.width = baseImage.width;
                canvas.height = baseImage.height;

                // Draw the base image on the canvas
                ctx.drawImage(baseImage, 0, 0);

                // Draw the overlay image on the canvas, positioning it on the desired coordinates
                const screenX = 365; // X-coordinate of the top-left corner of the laptop screen
                const screenY = 50; // Y-coordinate of the top-left corner of the laptop screen
                const screenWidth = 1720 - screenX; // Width of the laptop screen
                const screenHeight = 893 - screenY; // Height of the laptop screen
                ctx.drawImage(
                    overlayImage,
                    screenX,
                    screenY,
                    screenWidth,
                    screenHeight
                );
                ctx.restore();
                toBlob(canvas).then((blob) => {
                    if (blob) {
                        setBlobUrl(URL.createObjectURL(blob));
                    } else throw new Error("Failed to create blob");
                });
            };
            overlayImage.crossOrigin = "anonymous";
            overlayImage.onload = drawImages;
        };
    }, [image]);
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const variants = {
        hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    Modal.setAppElement("#__next");

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div
                style={{ backgroundColor: color }}
                className={classNames(
                    "tw-cursor-pointer tw-text-white tw-overflow-hidden tw-rounded",
                    "tw-relative tw-group tw-grid tw-grid-cols-6 tw-p-5",
                    "before:tw-w-full before:tw-h-full before:tw-absolute before:tw-top-0 before:tw-left-0 before:tw-bg-black/70 before:tw-opacity-30 before:tw-transition-all before:tw-ease-in-out before:tw-duration-300",
                    "md:tw-p-7 md:tw-min-h-[23rem] hover:before:tw-opacity-0"
                )}
                onClick={handleOpenModal}
            >
                <div
                    className={classNames(
                        "tw-z-10 tw-relative tw-col-span-6 md:tw-col-span-4 tw-flex flex-column justify-content-center align-items-center",
                        "md:group-hover:-tw-translate-x-[250%] tw-duration-[0.9s] tw-ease-in-out tw-transition-all"
                    )}
                >
                    <p className="tw-text-[12px] md:tw-text-[14px]">
                        <em>{technologies}</em>
                    </p>
                    <h3 className="tw-text-2xl md:tw-text-3xl tw-py-3 tw-whitespace-nowrap">
                        {title}
                    </h3>
                    <span className="tw-text-[15px] md:tw-text-lg tw-block tw-text-center">
                        View Work &#8594;
                    </span>
                </div>
                <div
                    className={classNames(
                        "tw-z-10 tw-relative tw-col-span-6 tw-flex tw-items-center tw-justify-center tw-w-full",
                        "md:tw-absolute md:tw-w-full md:tw-h-full md:tw-top-0 md:tw-left-1/2 ",
                        "md:tw-transition-all md:tw-duration-[1.3s] md:tw-ease-in-out md:group-hover:-tw-translate-x-1/2"
                    )}
                >
                    <div className="tw-mx-auto tw-aspect-[5/3] tw-max-h-[12rem] tw-h-full">
                        {bloburl && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={bloburl}
                                className={classNames(
                                    "tw-w-full",
                                    "md:tw-transition-all md:tw-ease-out md:tw-duration-1000 md:group-hover:tw-scale-[1.4] tw-mt-7"
                                )}
                                alt="Laptop displaying the application"
                            />
                        )}
                    </div>
                </div>
            </div>
            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                style={{
                    content: {
                        backgroundColor: "#101010",
                        padding: "60px",
                        display: "flex",
                        flexDirection: "column",
                        width: "80%",
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: "999",
                        maxWidth: "90rem",
                    },
                }}
            >
                <div>
                    <button
                        onClick={handleCloseModal}
                        type="button"
                        className="tw-absolute  tw-top-4 tw-right-4 tw-w-6 tw-opacity-50 hover:tw-opacity-100 tw-transition"
                    >
                        <ImageNext
                            src={closeModal}
                            alt="Close"
                        ></ImageNext>
                    </button>
                    <h2 className="tw-text-center tw-text-2xl tw-mb-5 tw-text-white tw-text-capitalize">
                        {title}
                    </h2>
                    <div
                        className="project-description tw-text-lg tw-mb-3 tw-text-gray-400 "
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                    <div className="tw-mt-10 tw-grid sm:tw-grid-cols-2 tw-gap-3">
                        {github && (
                            <a
                                className="btn tw-no-underline tw-text-center tw-block tw-font-semibold"
                                href={github}
                            >
                                GitHub Repo
                            </a>
                        )}
                        {deployed && (
                            <a
                                className="btn tw-no-underline tw-text-center tw-block tw-font-semibold"
                                href={deployed}
                            >
                                Live Link
                            </a>
                        )}
                    </div>
                </div>
            </Modal>
        </motion.div>
    );
};

export default Project;

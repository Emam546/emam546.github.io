import aboutMeImg from "../images/aboutme.jpg";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
// import resume from "../pages/about/michael-yeates-resume.pdf";
import Image from "next/image";
interface Props {
    name: string;
    email: string;
    location: string;
    availability: string;
    brand: string;
    resume?: string;
    desc: string;
    phone?: string;
}
const AboutMe = ({
    name,
    email,
    location,
    availability,
    brand,
    resume,
    desc,
    phone,
}: Props) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        setDownloading(false);
    }, [downloading]);

    const handleDownload = () => {
        if (!resume) return;
        setDownloading(true);
        const link = document.createElement("a");
        link.href = resume;
        link.download = `${name.replaceAll(" ", "-")}.pdf`;
        link.onload = () => {
            link.remove();
            setDownloading(false);
        };
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="aboutContainer tw-pb-3 tw-container tw-mx-auto tw-px-4">
            <div className="tw-grid tw-grid-cols-12 tw-gap-x-4 tw-gap-y-4">
                <motion.div
                    className="tw-col-span-12 lg:tw-col-span-4 tw-overflow-hidden tw-flex tw-justify-center tw-items-center"
                    ref={ref}
                    initial={{ x: "-10vw", opacity: 0 }}
                    animate={
                        inView
                            ? { x: 0, opacity: 1 }
                            : { x: "-10vw", opacity: 0 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <Image
                        className="tw-w-7/12 lg:tw-w-full tw-border tw-border-solid tw-border-gray"
                        src={aboutMeImg}
                        alt={name}
                    />
                </motion.div>
                <motion.div
                    className="personalInfo tw-col-span-12 lg:tw-col-span-8"
                    ref={ref}
                    initial={{ x: "10vw", opacity: 0 }}
                    animate={
                        inView
                            ? { x: 0, opacity: 1 }
                            : { x: "10vw", opacity: 0 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="contentContainer tw-p-3">
                        <h4 className="tw-mb-4 tw-text-lg tw-font-normal tw-text-green">
                            Nice to meet you
                        </h4>
                        <div
                            className="first-letter:capitalize tw-text-[18px] tw-text-gray-300"
                            dangerouslySetInnerHTML={{ __html: desc }}
                        />

                        <div className="contentDescription tw-mb-7 tw-text-white">
                            <p>{brand}</p>
                        </div>
                        <div className="infoContainer">
                            <div className="row">
                                <div className="col-12 col-md-6 tw-pl-0">
                                    <span>Name:</span>
                                    <p>{name}</p>
                                </div>
                                <div className="col-12 col-md-6 tw-pl-0">
                                    <span>Email:</span>
                                    <p>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 tw-pl-0">
                                    <span>Location:</span>
                                    <p>{location}</p>
                                </div>
                                <div className="col-12 col-md-6 tw-pl-0">
                                    <span>Phone:</span>
                                    <p>{phone}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 tw-pl-0">
                                    <span>Availability:</span>
                                    <p>{availability}</p>
                                </div>
                            </div>
                        </div>
                        <div className="tw-flex tw-items-center tw-justify-between tw-mr-7">
                            {resume ? (
                                <a
                                    className="btn tw-my-7 tw-block tw-mx-auto lg:tw-mx-0"
                                    onClick={handleDownload}
                                    href={resume}
                                    target="_blank"
                                >
                                    {downloading
                                        ? "Downloading..."
                                        : "Download Resume"}
                                </a>
                            ) : (
                                <div className="tw-pb-10"></div>
                            )}
                            <SocialIcons />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;

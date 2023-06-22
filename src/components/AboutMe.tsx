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
    jobTitle: string;
    desc: string;
}
const AboutMe = ({
    name,
    email,
    location,
    availability,
    brand,
    resume,
    jobTitle,
    desc,
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
        <div className="aboutContainer container">
            <div className="row">
                <motion.div
                    className="col-12 col-lg-4 tw-overflow-hidden tw-flex tw-justify-center tw-items-start"
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
                        className="tw-full"
                        src={aboutMeImg}
                        alt={name}
                    />
                </motion.div>
                <motion.div
                    className="personalInfo col-12 col-lg-8"
                    ref={ref}
                    initial={{ x: "10vw", opacity: 0 }}
                    animate={
                        inView
                            ? { x: 0, opacity: 1 }
                            : { x: "10vw", opacity: 0 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="contentContainer">
                        <h4>Nice to meet you</h4>
                        <div
                            className="first-letter:capitalize tw-text-[18px] tw-text-gray-300"
                            // dangerouslySetInnerHTML={{ __html: desc }}
                        >
                            {jobTitle} who creates amazing digital experiences!
                        </div>
                        <div className="contentDescription">
                            <p>{brand}</p>
                        </div>
                        <div className="infoContainer">
                            <div className="row">
                                <div className="col-12 col-md-6 info">
                                    <span>Name:</span>
                                    <p>{name}</p>
                                </div>
                                <div className="col-12 col-md-6 info">
                                    <span>Email:</span>
                                    <p>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 info">
                                    <span>Location:</span>
                                    <p>{location}</p>
                                </div>
                                <div className="col-12 col-md-6 info">
                                    <span>Availability:</span>
                                    <p>{availability}</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            {resume ? (
                                <a
                                    className="btn downloadCV tw-block tw-mx-auto md:tw-mx-0"
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

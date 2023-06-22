import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "@src/images/me.svg";
import Draw from "@src/components/Draw";
import SocialIcons from "@src/components/SocialIcons";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
interface Props {
    name: string;
    jobTitle: string;
}
const Landing: NextPage<Props> = ({ name, jobTitle }) => {
    const styles = {
        landing: {
            height: "calc(100% - 93px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        landingImage: {
            position: "absolute",
            bottom: "0",
            opacity: "0.3",
            mixBlendMode: "lighten",
            height: "80%",
        },

        textContainer: {
            display: "flex",
            flexDirection: "column",
            letterSpacing: "1px",
            textAlign: "center",
            zIndex: "1",
            color: "#fff",
            textShadow: "1px 1px 3px #000",
        },

        name: {
            color: "#fff",
            fontWeight: "700",
            marginTop: "-100px",
            paddingBottom: "28px",
        },
    };

    return (
        <section
            className="landing"
            style={styles.landing}
        >
            <Draw />
            <div
                className="textContainer"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    letterSpacing: "1px",
                    textAlign: "center",
                    zIndex: "1",
                    color: "#fff",
                    textShadow: "1px 1px 3px #000",
                }}
            >
                <h1
                    className="name"
                    style={styles.name}
                >
                    {name}
                </h1>
                <div className="description">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`I'm a ${jobTitle}`)
                                .pauseFor(1500)
                                .deleteChars(jobTitle.length)
                                .deleteAll()
                                .typeString("Bringing your ideas to life")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="image-container">
                <motion.img
                    className="landingImage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        bottom: "0",
                        opacity: "0.3",
                        mixBlendMode: "lighten",
                        height: "80%",
                    }}
                    src={landingImage}
                    alt={name}
                />
            </div>
            <SocialIcons />
        </section>
    );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const res = await axios.get(
        "https://cv-builder-tobe.onrender.com/api/v1/data/info/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    const data = res.data.data;
    return {
        props: {
            name: `${data.firstName} ${data.lastName}`,
            jobTitle: (data.jobTitle as string).trimEnd(),
        },
    };
};

export default Landing;

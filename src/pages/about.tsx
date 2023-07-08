import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { RespondType, Data } from "@/info";
interface Props {
    aboutMe: string;
    avatar: string;
}
const About: NextPage<Props> = ({ aboutMe, avatar }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeBio
                    aboutMe={aboutMe}
                    avatar={avatar}
                />
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <AboutCounter />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutClients />
            </motion.div>
        </>
    );
};
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const { data: aboutMe } = await axios.get<
        RespondType<Data["paragraph"]["data"]>
    >("https://cv-builder-tobe.onrender.com/api/v1/data/paragraph/data", {
        params: {
            apikey: process.env.API_KEY,
        },
    });
    const { data: avatar } = await axios.get<RespondType<Data["info"]["data"]>>(
        "https://cv-builder-tobe.onrender.com/api/v1/data/info/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    return {
        props: {
            aboutMe: aboutMe.data[0].desc,
            avatar: avatar.data.imgUrl,
        },
    };
};
export default About;

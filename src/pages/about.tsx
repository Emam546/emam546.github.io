import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { RespondType, Data } from "@/info";
import Head from "next/head";
import PortfolioApi from "@/axios";
interface Props {
    aboutMe: string;
    avatar: string;
}
const About: NextPage<Props> = ({ aboutMe, avatar }) => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
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
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <AboutCounter />
            </motion.div> */}

            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutClients />
            </motion.div> */}
        </>
    );
};
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const { data: aboutMe } = await PortfolioApi.get<
        RespondType<Data["paragraph"]["data"]>
    >("/paragraph/data", {});
    const { data: avatar } = await PortfolioApi.get<
        RespondType<Data["info"]["data"]>
    >("/info/data");
    return {
        props: {
            aboutMe: aboutMe.data[0].desc,
            avatar: avatar.data.imgUrl,
        },
    };
};
export default About;

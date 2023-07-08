import { motion } from "framer-motion";
import ContactDetails, {
    Props as ContactDetailsProps,
} from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { Data, RespondType } from "@/info";
import Head from "next/head";
interface Props {
    contact: ContactDetailsProps;
}
const Contact: NextPage<Props> = ({ contact }) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.1,
                }}
                className="container flex flex-col-reverse justify-between px-3 py-5 mx-auto md:grid g sm:grid-cols-12 sm:gap-x-5 lg:gap-x-10 lg:flex-row lg:py-10 lg:mt-10"
            >
                <div className="sm:col-span-8 lg:col-span-8">
                    <ContactForm />
                </div>
                <div className="sm:col-span-4 lg:col-span-4">
                    <ContactDetails {...contact} />
                </div>
            </motion.div>
        </>

    );
};
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const {
        data: { data: info },
    } = await axios.get<RespondType<Data["info"]["data"]>>(
        "https://cv-builder-tobe.onrender.com/api/v1/data/info/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    return {
        props: {
            contact: {
                ...info,
            },
        },
    };
};
export default Contact;

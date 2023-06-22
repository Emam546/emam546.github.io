import AboutMe from "@src/components/AboutMe";
import PageHeader from "@src/components/PageHeader";
import { Context } from "@src/context";
import { useContext } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios from "axios";
import { Data } from "@src/info";

const states = [
    {
        label: "Immediately Available",
        val: "immediately",
    },
    {
        label: "Currently Employed, but Open to Opportunities",
        val: "employed_open",
    },
    {
        label: "Part Time",
        val: "part_time",
    },
    {
        label: "Full Time",
        val: "full_time",
    },
    {
        label: "Contract",
        val: "contract",
    },
    {
        label: "Temporary",
        val: "temporary",
    },
    {
        label: "Availability for Remote Work",
        val: "remote_work",
    },
    {
        label: "Availability for Relocation",
        val: "relocation",
    },
    {
        label: "Flexible",
        val: "flexible",
    },
];
interface Props {
    desc: string;
    resume: string;
}
const About: NextPage<Props> = ({ desc, resume }) => {
    const data = useContext(Context).info;
    const availability = states.find(
        (val) => data.availability == val.val
    )!.label;

    const name = `${data.firstName} ${data.lastName}`;
    const email = data.email;
    const location = data.address;
    const jobTitle = data.jobTitle;
    const brand = "";

    return (
        <section className="about">
            <PageHeader
                title="About Me"
                description="Let me introduce myself"
            />
            <AboutMe
                name={name}
                location={location}
                brand={brand}
                email={email}
                availability={availability}
                resume={resume}
                jobTitle={jobTitle}
                desc={desc}
            />
        </section>
    );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const res = await axios.get(
        "https://cv-builder-tobe.onrender.com/api/v1/data/professional/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    const resResume = await axios.get(
        "https://cv-builder-tobe.onrender.com/api/v1/data/links/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    const resume =
        (resResume.data.data as Data["links"]["data"]).find((val) =>
            val.label.toLowerCase().includes("resume")
        )?.link || "";
    return {
        props: {
            desc: res.data.data,
            resume,
        },
    };
};

export default About;

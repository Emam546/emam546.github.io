import AboutMe from "@src/components/AboutMe";
import PageHeader from "@src/components/PageHeader";
import { Context } from "@src/context";
import { useContext } from "react";
import { GetStaticProps, NextPage } from "next";

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
interface Props {}
const About: NextPage<Props> = () => {
    const { info: data, websites, profile } = useContext(Context);
    const availability = states.find(
        (val) => data.availability == val.val
    )!.label;
    const brand = "";
    const resume = websites.find((val) =>
        val.label.toLowerCase().includes("resume")
    )?.link;
    return (
        <section className="about">
            <PageHeader
                title="About Me"
                description="Let me introduce myself"
            />
            <AboutMe
                name={`${data.firstName} ${data.lastName}`}
                location={data.address}
                brand={brand}
                email={data.email}
                phone={data.phone}
                availability={availability}
                resume={resume}
                desc={profile}
            />
        </section>
    );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {},
    };
};
export default About;

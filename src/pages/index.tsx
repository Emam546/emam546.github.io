import Typewriter from "typewriter-effect";
import Draw from "@src/components/Draw";
import SocialIcons from "@src/components/SocialIcons";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
interface Props {
    name: string;
    jobTitle: string;
}
const Landing: NextPage<Props> = ({ name, jobTitle }) => {
    return (
        <section className="landing tw-flex tw-justify-center tw-items-center tw-flex-1">
            <Draw />
            <div
                className="textContainer tw-tracking-wider tw-mb-[10rem] tw-text-center tw-z-10 tw-text-white"
                style={{
                    textShadow: "1px 1px 3px #000",
                }}
            >
                <h1 className="name tw-text-white tw-font-bold tw-mb-7 tw-text-5xl md:tw-text-7xl">
                    {name}
                </h1>
                <div className="tw-text-2xl md:tw-text-3xl">
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
            <SocialIcons className="tw-flex tw-absolute tw-left-12 tw-bottom-5 md:tw-flex-col" />
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

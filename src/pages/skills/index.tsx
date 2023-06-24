import { GetStaticProps, NextPage } from "next";

import { motion } from "framer-motion";

import { SkillsData } from "@src/components/SkillsData";
import styles from "@src/styles/style.module.css";
import { Data, RespondType } from "@src/info";
import axios from "axios";
const pageVariants = {
    init: {
        opacity: 0,
        y: "-100%",
    },
    anim: {
        opacity: 1,
        y: 0,
    },
    last: {
        opacity: 0,
        y: "-100%",
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
};

export { pageVariants, pageTransition };
interface Props {
    data: Data["skills"]["data"];
}
const Skills: NextPage<Props> = ({ data }) => {
    const items = data.reduce((acc, { skills }, i) => {
        const items = skills
            .map(({ label }, i) => {
                const item = SkillsData.find((val) => {
                    return (
                        label
                            .toLocaleLowerCase()
                            .includes(val.name.toLocaleLowerCase()) ||
                        val.name
                            .toLocaleLowerCase()
                            .includes(label.toLowerCase())
                    );
                });
                if (!item) return null;
                return (
                    <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {item.icon({ color: "#fff", })}
                    </a>
                );
            })
            .filter((val) => val) as JSX.Element[];
        return [...acc, ...items];
    }, [] as JSX.Element[]);

    return (
        <div className={styles.skills}>
            <motion.div
                initial="init"
                animate="anim"
                exit="last"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div className={styles.wrapper}>
                    <h3 className={styles.skillsopen}>{`<skills>`}</h3>
                    <div className={styles.skills_content}>{items}</div>
                    <h3 className={styles.skillsclose}>{`</skills>`}</h3>
                </div>
            </motion.div>
        </div>
    );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const res = await axios.get<RespondType<Data["skills"]["data"]>>(
        "https://cv-builder-tobe.onrender.com/api/v1/data/skills/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    return {
        props: {
            data: res.data.data,
        },
    };
};

export default Skills;

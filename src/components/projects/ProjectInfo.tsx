import Link from "next/link";
import style from "./projectInfo.module.scss";
import classNames from "classnames";
import Button from "../reusable/Button";
import { FiGithub, FiGlobe } from "react-icons/fi";
export interface Props {
    desc: string;
    live?: string;
    github?: string;
}
const ProjectInfo = ({ desc, github, live }: Props) => {
    return (
        <div className="mt-14">
            {/*  Single project right section */}
            <div
                className={classNames(
                    "text-ternary-dark dark:text-ternary-light",
                    style.projectInfo
                )}
                dangerouslySetInnerHTML={{ __html: desc }}
            ></div>
            <div className="flex justify-center gap-x-10">
                {github && (
                    <a
                        href={github}
                        className="px-6 py-3 text-lg text-white duration-300 bg-gray-900 rounded-lg shadow-lg font-general-medium hover:shadow-xl hover:bg-gray-600 focus:ring-1 focus:ring-gray-600 sm:text-xl"
                        aria-label="More Projects"
                    >
                        <FiGithub className="mr-2 inline-block" />
                        <span>github</span>
                    </a>
                )}

                {live && (
                    <a
                        href={live}
                        className="flex items-center px-6 py-3 text-lg text-white duration-300 bg-indigo-700 rounded-lg shadow-lg font-general-medium hover:shadow-xl hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 sm:text-xl"
                        aria-label="More Projects"
                    >
                        <FiGlobe className="mr-2 inline-block" />
                        <span>Live</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectInfo;

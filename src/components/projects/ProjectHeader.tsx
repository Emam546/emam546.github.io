import { useContext } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import { ProjectType } from "@/data/singleProjectData";

const ProjectSingleHeader = ({
    title,
    tags,
    publishDate,
}: ProjectType["ProjectHeader"]) => {
    return (
        <div>
            <p className="text-3xl font-bold text-left font-general-medium sm:text-4xl text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                {title}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
                <div>
                    <FiClock className="inline-block text-lg text-ternary-dark dark:text-ternary-light" />
                    <span className="ml-2 leading-none font-general-regular text-primary-dark dark:text-primary-light">
                        {publishDate}
                    </span>
                </div>
                <div>
                    <FiTag className="inline-block text-lg in text-ternary-dark dark:text-ternary-light" />
                    <span className="ml-2 leading-none font-general-regular text-primary-dark dark:text-primary-light">
                        {tags.join(" | ")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleHeader;

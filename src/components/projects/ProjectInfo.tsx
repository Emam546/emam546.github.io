import style from "./projectInfo.module.scss";
import classNames from "classnames";
const ProjectInfo = ({ desc }: { desc: string }) => {
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
        </div>
    );
};

export default ProjectInfo;

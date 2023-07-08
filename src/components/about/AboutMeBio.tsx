import { useContext } from "react";
import style from "./AboutMeBio.module.scss";
import classNames from "classnames";
interface Props {
    aboutMe: string;
    avatar: string;
}
const AboutMeBio = ({ aboutMe, avatar }: Props) => {
    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0 aspect-square overflow-hidden">
                <img
                    src={avatar}
                    className="rounded-lg w-96"
                    alt="profile img"
                />
            </div>

            <div
                className={classNames(
                    "font-general-regular w-full sm:w-3/4 text-left text-ternary-dark dark:text-ternary-light text-xl",
                    style.aboutme
                )}
                dangerouslySetInnerHTML={{ __html: aboutMe }}
            ></div>
        </div>
    );
};

export default AboutMeBio;

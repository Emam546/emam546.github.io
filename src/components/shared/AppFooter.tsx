import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
} from "react-icons/fi";
import AppFooterCopyright from "./AppFooterCopyright";
import { Data } from "@/info";

const socialLinks = [
    {
        label: "github",
        icon: <FiGithub />,
    },
    {
        label: "twitter",
        icon: <FiTwitter />,
    },
    {
        label: "linkedin",
        icon: <FiLinkedin />,
    },
    {
        label: "youtube",
        icon: <FiYoutube />,
    },
];
interface Props {
    links: Data["links"]["data"];
}
function FollowLinks({ links }: Props) {
    const mS = socialLinks
        .map((link) => {
            const Rlink = links.find(
                (val) =>
                    val.label.toLowerCase().includes(link.label) ||
                    link.label.includes(val.label.toLocaleLowerCase())
            );
            if (!Rlink) return null;
            return (
                <a
                    href={Rlink.link}
                    target="__blank"
                    key={Rlink.id}
                    className="p-4 text-gray-400 duration-300 rounded-lg shadow-sm cursor-pointer text-ce hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100"
                >
                    <i className="text-xl sm:text-2xl md:text-3xl">
                        {link.icon}
                    </i>
                </a>
            );
        })
        .filter((val) => val != null);
    if (!mS.length) return null;
    return (
        <div className="flex flex-col items-center justify-center mb-12 font-general-regular sm:mb-28">
            <p className="mb-5 text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
                Follow me
            </p>
            <ul className="flex gap-4 sm:gap-8">{mS}</ul>
        </div>
    );
}

const AppFooter = ({ links }: Props) => {
    return (
        <div className="container mx-auto">
            <div className="pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light dark:border-secondary-dark">
                {/* Footer social links */}

                <FollowLinks links={links} />
                <AppFooterCopyright />
            </div>
        </div>
    );
};

export default AppFooter;

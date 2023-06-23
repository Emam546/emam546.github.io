import { Context } from "@src/context";
import { AnchorHTMLAttributes, HTMLAttributes, useContext } from "react";
export function Icon(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            {...props}
            className="icon tw-no-underline tw-text-2xl tw-p-3 transition duration-200 ease-in"
        />
    );
}
const SocialIcons = (props: HTMLAttributes<HTMLDivElement>) => {
    const { info, websites } = useContext(Context);
    const name = `${info.firstName} ${info.lastName}`;
    const social: Record<string, string> = websites.reduce((acc, val) => {
        acc[val.label] = val.link;
        return acc;
    }, {} as Record<string, string>);
    return (
        <div
            {...props}
            className={`socialIcons ${props.className}`}
        >
            {social.linkedin && (
                <Icon href={social.github}>
                    <i
                        className="fa-brands fa-github"
                        aria-hidden="true"
                        title={`${name} GitHub Profile`}
                    ></i>
                </Icon>
            )}

            {social.linkedin && (
                <Icon href={social.linkedin}>
                    <i
                        className="fa-brands fa-linkedin"
                        aria-hidden="true"
                        title={`${name} LinkedIn Profile`}
                    ></i>
                </Icon>
            )}
            {social.instagram && (
                <Icon href={social.instagram}>
                    <i
                        className="fa-brands fa-instagram"
                        aria-hidden="true"
                        title={`${name} Instagram Profile`}
                    ></i>
                </Icon>
            )}
            {social.twitter && (
                <Icon href={social.twitter}>
                    <i
                        className="fa-brands fa-twitter"
                        aria-hidden="true"
                        title={`${name} Twitter Profile`}
                    ></i>
                </Icon>
            )}
            {social.skype && (
                <Icon href={social.skype}>
                    <i
                        className="fa-brands fa-skype"
                        aria-hidden="true"
                        title={`${name} Twitter Profile`}
                    ></i>
                </Icon>
            )}
        </div>
    );
};

export default SocialIcons;

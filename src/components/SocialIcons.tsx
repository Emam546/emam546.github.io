import { Context } from "@src/context";
import { useContext } from "react";

const SocialIcons = () => {
    const styles = {
        icon: {
            textDecoration: "none",
            fontSize: "22px",
            padding: "10px",
            transition: "0.2s ease-in",
        },
    };
    const { info, websites } = useContext(Context);
    const name = `${info.firstName} ${info.lastName}`;
    const social: Record<string, string> = websites.reduce((acc, val) => {
        acc[val.label] = val.link;
        return acc;
    }, {} as Record<string, string>);
    return (
        <div className="socialIcons">
            {social.linkedin && (
                <a
                    className="icon"
                    style={styles.icon}
                    href={social.github}
                >
                    <i
                        className="fa-brands fa-github"
                        aria-hidden="true"
                        title={`${name} GitHub Profile`}
                    ></i>
                </a>
            )}

            {social.linkedin && (
                <a
                    className="icon"
                    style={styles.icon}
                    href={social.linkedin}
                >
                    <i
                        className="fa-brands fa-linkedin"
                        aria-hidden="true"
                        title={`${name} LinkedIn Profile`}
                    ></i>
                </a>
            )}
            {social.instagram && (
                <a
                    className="icon"
                    style={styles.icon}
                    href={social.instagram}
                >
                    <i
                        className="fa-brands fa-instagram"
                        aria-hidden="true"
                        title={`${name} Instagram Profile`}
                    ></i>
                </a>
            )}
            {social.twitter && (
                <a
                    className="icon"
                    style={styles.icon}
                    href={social.twitter}
                >
                    <i
                        className="fa-brands fa-twitter"
                        aria-hidden="true"
                        title={`${name} Twitter Profile`}
                    ></i>
                </a>
            )}
        </div>
    );
};

export default SocialIcons;

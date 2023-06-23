import { AnchorHTMLAttributes, ReactNode, useState } from "react";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";
function Item(props: LinkProps & { children: ReactNode }) {
    return (
        <Link
            {...props}
            className={classNames(
                "tw-py-4 tw-relative tw-flex hover:tw-text-white tw-justify-center tw-text-decoration-none md:tw-px-0"
            )}
        />
    );
}
const NavLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <button
                className="tw-self-center md:tw-hidden tw-flex tw-w-fit tw-ml-auto tw-cursor-pointer tw-bg-none tw-border-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <Image
                        className="closeMenu tw-w-fit"
                        src={closeMenu}
                        alt="Close"
                    />
                ) : (
                    <Image
                        className="openMenu tw-w-fit"
                        src={openMenu}
                        alt="Open"
                    />
                )}
            </button>
            <nav
                className={classNames(
                    `links ${isMenuOpen ? "open" : "closed"} tw-self-center`,
                    `tw-hidden tw-absolute tw-p-3 tw-z-[999] tw-rounded-xl tw-w-full tw-top-full tw-right-0`,
                    "md:tw-flex md:tw-justify-end md:tw-static md:tw-px-0 tw-gap-x-5"
                )}
            >
                <Item
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Item>
                <Item
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                >
                    About
                </Item>
                <Item
                    href="/portfolio"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Portfolio
                </Item>
                <Item
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </Item>
            </nav>
        </>
    );
};

export default NavLinks;

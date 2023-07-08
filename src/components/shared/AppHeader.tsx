import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import HireMeModal from "@/components/HireMeModal";
import logoLight from "@/images/logo-light.svg";
import logoDark from "@/images/logo-dark.svg";
import { motion } from "framer-motion";
import Button from "@/components/reusable/Button";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
const AppHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [activeTheme, setTheme] = useThemeSwitcher();

    function toggleMenu() {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName("html")[0]
                .classList.add("overflow-y-hidden");
            setShowModal(true);
        } else {
            document
                .getElementsByTagName("html")[0]
                .classList.remove("overflow-y-hidden");
            setShowModal(false);
        }
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="nav"
            className="sm:container sm:mx-auto"
        >
            <div className="z-10 block max-w-screen-lg py-6 xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center">
                {/* Header menu links and small screen hamburger menu */}
                <div className="flex items-center justify-between px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            {activeTheme === "dark" ? (
                                <Image
                                    src={logoDark}
                                    className="w-36"
                                    alt="Dark Logo"
                                />
                            ) : (
                                <Image
                                    src={logoLight}
                                    className="w-36"
                                    alt="Dark Logo"
                                />
                            )}
                        </Link>
                    </div>

                    {/* Theme switcher small screen */}
                    <div className="flex items-center gap-3">
                        <div
                            onClick={() => setTheme(activeTheme)}
                            aria-label="Theme Switcher"
                            className="block p-3 ml-0 shadow-sm cursor-pointer sm:hidden bg-primary-light dark:bg-ternary-dark rounded-xl"
                        >
                            {activeTheme === "dark" ? (
                                <FiMoon className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light" />
                            ) : (
                                <FiSun className="text-xl text-gray-200 hover:text-gray-50" />
                            )}
                        </div>

                        {/* Small screen hamburger menu */}
                        <div className="sm:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className={classNames(
                                    "fill-current text-secondary-dark dark:text-ternary-light",
                                    "flex items-start h-7 w-7 focus:outline-none"
                                )}
                                aria-label="Hamburger Menu"
                            >
                                {showMenu ? (
                                    <FiX className="text-3xl" />
                                ) : (
                                    <FiMenu className="text-3xl" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Header links small screen */}
                <div
                    className={
                        showMenu
                            ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
                            : "hidden"
                    }
                >
                    <Link
                        href="/projects"
                        className="block mb-2 text-lg text-left text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2"
                        aria-label="Projects"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className="block pt-3 mb-2 text-lg text-left border-t-2 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                        aria-label="About Me"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/contact"
                        className="block pt-3 mb-2 text-lg text-left border-t-2 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                        aria-label="Contact"
                    >
                        Contact
                    </Link>
                    <div className="pt-3 border-t-2 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <span
                            onClick={showHireMeModal}
                            className="block w-24 px-4 py-2 mt-2 text-left text-white duration-300 bg-indigo-500 rounded-sm shadow-sm font-general-medium sm:hidden text-md hover:bg-indigo-600"
                            aria-label="Hire Me Button"
                        >
                            <Button>Hire Me</Button>
                        </span>
                    </div>
                </div>

                {/* Header links large screen */}
                <div className="items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none">
                    <Link
                        href="/projects"
                        className="block mb-2 text-lg text-center text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2"
                        aria-label="Projects"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className="block mb-2 text-lg text-center text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2"
                        aria-label="About Me"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/contact"
                        className="block mb-2 text-lg text-center text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2"
                        aria-label="Contact"
                    >
                        Contact
                    </Link>
                </div>

                {/* Header right section buttons */}
                <div className="flex-col items-center justify-between hidden sm:flex md:flex-row">
                    <div className="hidden md:flex">
                        <span
                            onClick={showHireMeModal}
                            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                            aria-label="Hire Me Button"
                        >
                            <Button>Hire Me</Button>
                        </span>
                    </div>

                    {/* Theme switcher large screen */}
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="p-3 ml-8 shadow-sm cursor-pointer bg-primary-light dark:bg-ternary-dark rounded-xl"
                    >
                        {activeTheme === "dark" ? (
                            <FiMoon className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light" />
                        ) : (
                            <FiSun className="text-xl text-gray-200 hover:text-gray-50" />
                        )}
                    </div>
                </div>
            </div>
            {/* Hire me modal */}
            <div>
                {showModal ? (
                    <HireMeModal
                        onClose={showHireMeModal}
                        onRequest={showHireMeModal}
                    />
                ) : null}
            </div>
        </motion.nav>
    );
};

export default AppHeader;

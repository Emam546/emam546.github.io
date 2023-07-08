import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import { Backdrop, CircularProgress } from "@mui/material";
import MessageDialog from "./MessageDailog";
import axios from "axios";
import { useState } from "react";

const selectOptions = ["Web Application", "Mobile Application", "Branding"];
interface Props {
    onClose: () => any;
    onRequest: () => any;
}
const HireMeModal = ({ onClose, onRequest }: Props) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-30 transition-all duration-500 font-general-medium"
            >
                {/* Modal Backdrop */}
                <div className="fixed inset-0 z-20 w-full h-full bg-black bg-opacity-50 bg-filter"></div>

                {/* Modal Content */}
                <main className="flex flex-col items-center justify-center w-full h-full">
                    <div className="z-30 flex items-center modal-wrapper">
                        <div className="relative flex-row max-w-md max-h-screen mx-5 overflow-auto rounded-lg shadow-lg modal xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark">
                            <div className="flex justify-between gap-10 p-5 border-b modal-header border-ternary-light dark:border-ternary-dark">
                                <h5 className="text-xl text-primary-dark dark:text-primary-light">
                                    What project are you looking for?
                                </h5>
                                <button
                                    onClick={onClose}
                                    className="px-4 font-bold text-primary-dark dark:text-primary-light"
                                >
                                    <FiX className="text-3xl" />
                                </button>
                            </div>
                            <div className="w-full h-full p-5 modal-body">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(
                                            e.currentTarget
                                        );
                                        const data = Object.fromEntries(
                                            formData.entries()
                                        );
                                        setLoading(true);
                                        axios
                                            .post(
                                                "https://api.web3forms.com/submit",
                                                {
                                                    ...data,
                                                    access_key:
                                                        process.env
                                                            .NEXT_PUBLIC_ACCESS_KEY,
                                                },
                                                {
                                                    headers: {
                                                        "Content-Type":
                                                            "application/json",
                                                        Accept: "application/json",
                                                    },
                                                }
                                            )
                                            .then(() => {
                                                setSuccess(true);
                                                const elements =
                                                    e.currentTarget.elements;
                                                for (
                                                    var i = 0;
                                                    i < elements.length;
                                                    i++
                                                ) {
                                                    const item = elements.item(
                                                        i
                                                    ) as HTMLInputElement;
                                                    item.value = "";
                                                }
                                            })
                                            .finally(() => {
                                                setLoading(false);
                                            });
                                    }}
                                    className="max-w-xl m-4 text-left"
                                >
                                    <div className="">
                                        <input
                                            className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Name"
                                            aria-label="Name"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <input
                                            className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="email"
                                            name="email"
                                            type="text"
                                            required
                                            placeholder="Email"
                                            aria-label="Email"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <select
                                            className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="subject"
                                            name="subject"
                                            required
                                            aria-label="Project Category"
                                        >
                                            {selectOptions.map((option) => (
                                                <option
                                                    className="text-normal sm:text-md"
                                                    key={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-6">
                                        <textarea
                                            className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="message"
                                            name="message"
                                            cols={14}
                                            rows={6}
                                            aria-label="Details"
                                            placeholder="Project description"
                                        ></textarea>
                                    </div>

                                    <div className="pb-4 mt-6 sm:pb-1">
                                        <button
                                            onClick={onClose}
                                            type="submit"
                                            className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                                            aria-label="Submit Request"
                                        >
                                            <Button title="Send Request" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="px-8 py-5 mt-2 text-right modal-footer sm:mt-0 border0-t">
                                <button
                                    onClick={onClose}
                                    type="button"
                                    className="px-4 py-2 duration-500 bg-gray-600 rounded-md sm:px-6 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light focus:ring-1 focus:ring-indigo-900"
                                    aria-label="Close Modal"
                                >
                                    <Button title="Close" />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </motion.div>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <MessageDialog
                state={success}
                handleClose={() => {
                    setSuccess(false);
                    onRequest();
                }}
            />
        </>
    );
};

export default HireMeModal;

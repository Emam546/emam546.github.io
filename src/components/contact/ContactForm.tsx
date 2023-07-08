import axios from "axios";
import Button from "@/components/reusable/Button";
import FormInput from "@/components/reusable/FormInput";
import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import MessageDialog from "@/components/MessageDailog";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    return (
        <>
            <div className="leading-loose">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const elements = e.currentTarget.elements;
                        const data = Object.fromEntries(formData.entries());
                        setLoading(true);
                        axios
                            .post(
                                "https://api.web3forms.com/submit",
                                {
                                    ...data,
                                    access_key:
                                        process.env.NEXT_PUBLIC_ACCESS_KEY,
                                },
                                {
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json",
                                    },
                                }
                            )
                            .then(() => {
                                setSuccess(true);

                                for (var i = 0; i < elements.length; i++) {
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
                    className="px-4 py-6 text-left shadow-xl sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl"
                >
                    <p className="mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
                        Contact Form
                    </p>
                    <FormInput
                        inputLabel="Full Name"
                        labelFor="name"
                        inputType="text"
                        inputId="name"
                        inputName="name"
                        placeholderText="Your Name"
                        ariaLabelName="Name"
                    />
                    <FormInput
                        inputLabel="Email"
                        labelFor="email"
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        placeholderText="Your email"
                        ariaLabelName="Email"
                    />
                    <FormInput
                        inputLabel="Subject"
                        labelFor="subject"
                        inputType="text"
                        inputId="subject"
                        inputName="subject"
                        placeholderText="Subject"
                        ariaLabelName="Subject"
                    />

                    <div className="mt-6">
                        <label
                            className="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 border-opacity-50 rounded-md shadow-sm dark:border-primary-dark text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark text-md"
                            id="message"
                            name="message"
                            cols={14}
                            rows={6}
                            aria-label="Message"
                        ></textarea>
                    </div>

                    <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                        <Button
                            type="submit"
                            aria-label="Send Message"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>

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
                handleClose={() => setSuccess(false)}
            />
        </>
    );
};

export default ContactForm;

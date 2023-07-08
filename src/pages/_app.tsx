import "@/styles/main.scss";
import "@/styles/globals.scss";
import type { AppContext, AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import AppFooter from "@/components/shared/AppFooter";
import AppHeader from "@/components/shared/AppHeader";
import UseScrollToTop from "@/hooks/useScrollToTop";
import LoadingState from "@/components/shared/loadingBar";
import Head from "next/head";
import App from "next/app";
import { Parser } from "htmlparser2";
import axios from "axios";
import { Data, RespondType } from "@/info";

function extractTextFromHTML(html: string) {
    let text = "";
    const parser = new Parser({
        ontext: (data) => {
            text += data;
        },
    });
    parser.write(html);
    parser.end();
    return text;
}
class MyApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        if (typeof window !== "undefined") return { ...pageProps };
        const [
            {
                data: { data: websites },
            },
            {
                data: { data: info },
            },
        ] = await Promise.all([
            await axios.get<RespondType<Data["links"]["data"]>>(
                "https://cv-builder-tobe.onrender.com/api/v1/data/links/data",
                {
                    params: {
                        apikey: process.env.API_KEY,
                    },
                }
            ),
            await axios.get<RespondType<Data["info"]["data"]>>(
                "https://cv-builder-tobe.onrender.com/api/v1/data/info/data",
                {
                    params: {
                        apikey: process.env.API_KEY,
                    },
                }
            ),
        ]);
        return { ...pageProps, context: { websites, info } } as any;
    }
    render() {
        let { Component, pageProps, context } = this.props;
        const name = `${context.info.firstName} ${context.info.lastName}`;
        const profileText =

            context.profile && extractTextFromHTML(context.profile);
        return (
            <>
                <Head>
                    <meta
                        name="author"
                        content={name}
                    />
                    {profileText && (
                        <meta
                            name="description"
                            content={profileText}
                        />
                    )}
                </Head>
                <AnimateSharedLayout>
                    <LoadingState />
                    <div className="transition duration-300 bg-secondary-light dark:bg-primary-dark">
                        <ScrollToTop />
                        <AppHeader />
                        <Component {...pageProps} />
                        <AppFooter links={context.websites} />
                        <UseScrollToTop />
                    </div>
                </AnimateSharedLayout>
            </>
        );
    }
}
export default MyApp;

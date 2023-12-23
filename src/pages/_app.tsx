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
import PortfolioApi from "@/axios";

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
            {
                data: { data: desc },
            },
        ] = await Promise.all([
            await PortfolioApi.get<RespondType<Data["links"]["data"]>>(
                "/links/data"
            ),
            await PortfolioApi.get<RespondType<Data["info"]["data"]>>(
                "/info/data"
            ),
            await PortfolioApi.get<RespondType<Data["paragraph"]["data"]>>(
                "/paragraph/data"
            ),
        ]);
        return {
            ...pageProps,
            context: {
                websites,
                info,
                desc: desc.find((val) => val.title == "Summury")?.desc,
            },
        } as any;
    }
    render() {
        let { Component, pageProps, context } = this.props;
        const name = `${context.info.firstName} ${context.info.lastName}`;
        const profileText = context.desc && extractTextFromHTML(context.desc);
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

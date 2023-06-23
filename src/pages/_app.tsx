import Header from "@src/components/Header";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "@src/styles/globals.css";
import "./portfolio/portfolio.css";
import "./contact/contact.css";
import "./index.css";
import "./about/about.css";
import type { AppContext } from "next/app";
import axios from "axios";
import App from "next/app";
import { Data } from "@src/info";
import { InitDataType, Provider } from "@src/context";
import Head from "next/head";
import { Parser } from "htmlparser2";
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

        if (typeof window !== "undefined")
            return { pageProps, context: undefined };
        const [infoRes, websiteRes, profile] = await Promise.all([
            axios.get(
                "https://cv-builder-tobe.onrender.com/api/v1/data/info/data",
                {
                    params: {
                        apikey: process.env.API_KEY,
                    },
                }
            ),
            axios.get(
                "https://cv-builder-tobe.onrender.com/api/v1/data/links/data",
                {
                    params: {
                        apikey: process.env.API_KEY,
                    },
                }
            ),
            axios.get(
                "https://cv-builder-tobe.onrender.com/api/v1/data/professional/data",
                {
                    params: {
                        apikey: process.env.API_KEY,
                    },
                }
            ),
        ]);
        const response = infoRes.data.data as Data["info"]["data"];
        const websites = websiteRes.data.data as Data["links"]["data"];

        const context: InitDataType = {
            info: response,
            websites: websites,
            profile: profile.data.data,
        };
        console.log(context);
        return { ...pageProps, context } as any;
    }

    render() {
        let { Component, pageProps, context } = this.props;
        const name = `${context.info.firstName} ${context.info.lastName}`;
        const profileText =
            context.profile && extractTextFromHTML(context.profile);
        return (
            <>
                <Provider contextValue={context}>
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
                    <Header />
                    <Component {...pageProps} />
                </Provider>
            </>
        );
    }
}

export default MyApp;

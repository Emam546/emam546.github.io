import Header from "@src/components/Header";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "@src/styles/globals.css";
import "./portfolio/portfolio.css";
import "./contact/contact.css";
import "./index.css";
import "./about/about.css";
import type { AppContext, AppProps } from "next/app";
import axios from "axios";
import App from "next/app";
import { Data } from "@src/info";
import { InitDataType, Provider } from "@src/context";
import Head from "next/head";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
        // Make your general request here
        const [infoRes, websiteRes] = await Promise.all([
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
                "https://cv-builder-tobe.onrender.com/api/v1/data/links/data",
                {
                    params: {
                        apikey: process.env.API_KEY,
                    },
                }
            ),
        ]);
        const response = infoRes.data.data as Data["info"]["data"];
        const websites = websiteRes.data.data as Data["links"]["data"];
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        const context: InitDataType = {
            info: response,
            websites: websites,
        };
        return { ...pageProps, context } as any;
    }

    render() {
        const { Component, pageProps, context } = this.props;
        const name = `${context.info.firstName} ${context.info.lastName}`;
        // Pass the response data as a prop to your components
        return (
            <>
                <Provider contextValue={context}>
                    <Head>
                        <meta
                            name="author"
                            content={name}
                        />
                        <meta
                            name="description"
                            content={`${name} is a talented ${context.info.jobTitle} who creates amazing digital experiences. With a focus on user experience, Michael brings your website ideas to life with precision and style. Contact Michael today to learn how he can help you craft a compelling online presence that engages and inspires your audience.`}
                        />
                        {/* <meta
                    property="og:image"
                    content="https://github.com/mdyeates/my-portfolio/raw/main/src/images/screenshot.png"
                /> */}
                    </Head>
                    <Header />
                    <Component {...pageProps} />
                </Provider>
            </>
        );
    }
}

export default MyApp;

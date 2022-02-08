import "../styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SSG-Modules NextJS Example</title>
                <meta
                    name="description"
                    content="An example NextJS app integrating the SSG-Modules packages using SSR."
                />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

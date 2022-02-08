import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />

                    <link rel="icon" href="spotlight-symbol.svg" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
                    />
                </Head>
                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

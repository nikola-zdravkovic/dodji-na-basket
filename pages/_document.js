import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="cache-control" content="no-cache, no-store, must-revalidate" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />

                    {/* <link rel='manifest' href='/manifest.json' /> */}

                    <meta name="HandheldFriendly" content="True" />
                    <meta name="MobileOptimized" content="320" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="robots" content="noimageindex" />
                    <meta name="robots" content="follow" />
                    <meta name="robots" content="noodp" />

                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-touch-fullscreen" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />

                    {/* <link rel='manifest' href='/favicons/light/site.webmanifest' /> */}

                    {/* <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/images/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/images/favicon/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/images/favicon/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <link rel="shortcut icon" href="/images/favicon/favicon.ico" /> */}

                    <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
                    <meta name="msapplication-TileColor" content="#6901EC" />
                    <meta name="msapplication-config" content="/images/favicon/browserconfig.xml" />
                    <meta name="theme-color" content="#000000" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

CustomDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};

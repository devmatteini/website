import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://hachyderm.io/@cosimomatteini" rel="me" />
            </Head>
            <body className="bg-black text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

import "../styles/globals.css"
import type { AppProps } from "next/app"
import type { MDXComponents } from "mdx/types"
import { MDXProvider } from "@mdx-js/react"

const components: MDXComponents = {}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={components}>
            <Component {...pageProps} />
        </MDXProvider>
    )
}

import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "@next/font/google"
import Footer from "../components/footer"
import { Analytics } from "@vercel/analytics/react"
import Container from "../components/container"

const font = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        // This <div> with flex is needed for sticky footer
        <div className="flex flex-col min-h-screen">
            <main className={`${font.className} flex-grow mt-8`}>
                <Container>
                    <Component {...pageProps} />
                </Container>
                <Analytics />
            </main>
            <Footer />
        </div>
    )
}

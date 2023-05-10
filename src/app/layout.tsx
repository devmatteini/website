import "../styles/globals.css"
import { Inter } from "next/font/google"
import Footer from "../components/footer"
import { Analytics } from "@vercel/analytics/react"
import Container from "../components/container"

const font = Inter({ subsets: ["latin"] })

type Props = {
    children: React.ReactNode
}
const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <head>
                <link href="https://hachyderm.io/@cosimomatteini" rel="me" />
            </head>
            <body className="bg-black text-white">
                {/* This <div> with flex is needed for sticky footer */}
                <div className="flex flex-col min-h-screen">
                    <main className={`${font.className} flex-grow mt-8`}>
                        <Container>{children}</Container>
                        <Analytics debug={process.env.ANALYTICS_DEBUG === "true"} />
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default RootLayout

import React from "react"
import CHead from "../components/head"
import { useRouter } from "next/router"
import Header from "../components/header"
import ExternalLink from "../components/external-link"

const Privacy: React.FC = () => {
    const router = useRouter()

    return (
        <>
            <CHead title="Privacy" description="Privacy" route={router.pathname} />
            <Header />
            <h1 className="font-bold mb-5">Privacy</h1>
            <h2 className="text-2xl">Your privacy is important to me, as is mine.</h2>
            <p>
                This website uses
                <ExternalLink
                    className="mx-1 font-bold underline"
                    href="https://vercel.com/docs/concepts/analytics"
                >
                    Vercel Analytics
                </ExternalLink>
                (that complies with GDPR) to collect Web Vitals metrics and Analytics statistics.
            </p>
            <p>
                Here you can find which anonymous data is collected by vercel:
                <br />
                <ExternalLink
                    className="underline"
                    href="https://vercel.com/docs/concepts/analytics/privacy"
                >
                    https://vercel.com/docs/concepts/analytics/privacy
                </ExternalLink>
            </p>
            <p>
                This website is open source, so you can inspect the GitHub repository
                <ExternalLink
                    className="underline ml-1"
                    href="https://github.com/devmatteini/website"
                >
                    devmatteini/website
                </ExternalLink>
            </p>
        </>
    )
}

export default Privacy

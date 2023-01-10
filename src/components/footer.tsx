import React from "react"
import ExternalLink from "./external-link"
import Link from "next/link"
import { GithubIcon, MastodonIcon, TwitterIcon } from "./icons"

const Footer: React.FC = () => {
    return (
        <footer className="bg-darkBlue p-4">
            <div className="flex flex-col max-w-2xl mx-auto">
                <div className="flex justify-center gap-x-10">
                    <ExternalLink
                        className="text-2xl"
                        href="https://github.com/devmatteini/"
                        ariaLabel="GitHub"
                    >
                        <GithubIcon />
                    </ExternalLink>
                    <ExternalLink
                        className="text-2xl"
                        href="https://twitter.com/MatteiniCosimo"
                        ariaLabel="Twitter"
                    >
                        <TwitterIcon />
                    </ExternalLink>
                    <ExternalLink
                        className="text-2xl"
                        href="https://hachyderm.io/@cosimomatteini"
                        ariaLabel="Mastodon"
                    >
                        <MastodonIcon />
                    </ExternalLink>
                </div>
                <p className="mt-3 mb-0 text-center">
                    ©{new Date().getFullYear()} <Link href="/">Cosimo Matteini</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer

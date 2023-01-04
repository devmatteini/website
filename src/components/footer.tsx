import React from "react"
import ExternalLink from "./external-link"
import { GithubIcon, MastodonIcon, TwitterIcon } from "./icons"

const Footer: React.FC = () => {
    return (
        <footer className="bg-darkBlue p-4">
            <div className="flex flex-col w-52 mx-auto">
                <div className="flex justify-around">
                    <ExternalLink className="text-2xl" href="https://github.com/devmatteini/">
                        <GithubIcon />
                    </ExternalLink>
                    <ExternalLink className="text-2xl" href="https://twitter.com/MatteiniCosimo">
                        <TwitterIcon />
                    </ExternalLink>
                    <ExternalLink className="text-2xl" href="https://hachyderm.io/@cosimomatteini">
                        <MastodonIcon />
                    </ExternalLink>
                </div>
                <p className="mt-3 mb-0 text-center">©{new Date().getFullYear()} Cosimo Matteini</p>
            </div>
        </footer>
    )
}

export default Footer

import React from "react"
import { GithubIcon, MastodonIcon, TwitterIcon } from "./icons"

const Footer: React.FC = () => {
    return (
        <footer className="bg-darkBlue p-4">
            <div className="flex flex-col w-52 mx-auto">
                <div className="flex justify-around">
                    <ExternalLink href="https://github.com/devmatteini/">
                        <GithubIcon />
                    </ExternalLink>
                    <ExternalLink href="https://twitter.com/MatteiniCosimo">
                        <TwitterIcon />
                    </ExternalLink>
                    <ExternalLink href="https://hachyderm.io/@cosimomatteini">
                        <MastodonIcon />
                    </ExternalLink>
                </div>
                <p className="mt-3 mb-0 text-center">©{new Date().getFullYear()} Cosimo Matteini</p>
            </div>
        </footer>
    )
}

type ExternalLinkProps = {
    href: string
}

const ExternalLink: React.FC<React.PropsWithChildren<ExternalLinkProps>> = ({ href, children }) => (
    <a className="text-2xl" href={href} target="_blank" rel="noreferrer">
        {children}
    </a>
)

export default Footer

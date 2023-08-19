import React from "react"
import ExternalLink from "./external-link"
import NextLink from "next/link"
import { GithubIcon, MastodonIcon, TwitterIcon } from "./icons"
import Container from "./container"

const Footer: React.FC = () => {
    return (
        <footer className="bg-darkBlue py-4">
            <Container>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <NextLink className="text-lg" href="/">
                        /home
                    </NextLink>
                    <NextLink className="text-lg" href="/blog">
                        /blog
                    </NextLink>
                    <NextLink className="text-lg" href="/privacy">
                        /privacy
                    </NextLink>
                    <ExternalLink
                        className="flex items-center gap-x-2 text-lg"
                        href="https://github.com/devmatteini/"
                        ariaLabel="GitHub"
                    >
                        <GithubIcon />
                        GitHub
                    </ExternalLink>
                    <ExternalLink
                        className="flex items-center gap-x-2 text-lg"
                        href="https://twitter.com/MatteiniCosimo"
                        ariaLabel="Twitter"
                    >
                        <TwitterIcon />
                        Twitter
                    </ExternalLink>
                    <ExternalLink
                        className="flex items-center gap-x-2 text-lg"
                        href="https://hachyderm.io/@cosimomatteini"
                        ariaLabel="Mastodon"
                    >
                        <MastodonIcon />
                        Mastodon
                    </ExternalLink>
                </div>
                <p className="mt-3 mb-0 sm:text-center">
                    ©{new Date().getFullYear()} <NextLink href="/">Cosimo Matteini</NextLink>
                </p>
            </Container>
        </footer>
    )
}

export default Footer

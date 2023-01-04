import React from "react"
import NextLink from "next/link"
import ExternalLink from "./external-link"
import { GithubIcon } from "./icons"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <nav className="bg-gradient-to-b from-darkBlue to-black p-4 flex justify-end items-center">
            <NextLink className="px-3 text-xl font-bold" href="/">
                /
            </NextLink>
            <NextLink className="px-3 text-xl font-bold" href="/blog">
                /blog
            </NextLink>
            <ExternalLink className="px-3 text-xl" href="https://github.com/devmatteini/">
                <GithubIcon />
            </ExternalLink>
        </nav>
    )
}

export default Header

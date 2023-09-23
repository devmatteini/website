import NextLink from "next/link"
import React from "react"
import { createMetadata } from "../shared/metadata"

export const metadata = createMetadata({
    title: "404 - Page not found",
    description:
        "It seems you've found something that used to exist, or you spelled something wrong. Can you check the URL?",
})

const NotFound: React.FC = () => {
    return (
        <>
            <h1 className="text-3xl md:text-5xl font-bold text-center">404 - Page not found</h1>
            <p className="text-center">
                It seems you&apos;ve found something that used to exist, or you spelled something
                wrong. Can you check the URL?
            </p>
            <NextLink href="/" className="p-4 rounded-md bg-darkBlue mx-auto">
                Return Home
            </NextLink>
        </>
    )
}

export default NotFound

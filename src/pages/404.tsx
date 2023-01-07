import Head from "next/head"
import Link from "next/link"
import React from "react"

const NotFound: React.FC = () => {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>
            <div className="max-w-2xl px-4 mx-auto flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-center">404 - Page not found</h1>
                <p className="text-center">
                    It seems you&apos;ve found something that used to exist, or you spelled
                    something wrong. Can you double check that URL?
                </p>
                <Link href="/" className="p-4 rounded-md bg-darkBlue">
                    Return Home
                </Link>
            </div>
        </>
    )
}

export default NotFound
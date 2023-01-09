import React from "react"
import NextHead from "next/head"

type MetaTagImage = {
    src: string
    alt: string
}

type HeadProps = {
    title: string
    description: string
    route: string
    image?: MetaTagImage
}

const websiteUrl = (route: string) =>
    process.env.NODE_ENV === "development"
        ? `http://localhost:3000${route}`
        : `https://cosimomatteini.com${route}`

const defaultImage: MetaTagImage = {
    src: websiteUrl("/base-og.jpg"),
    alt: "cosimomatteini.com",
}

const CHead: React.FC<HeadProps> = ({ title, description, route, image = defaultImage }) => {
    const url = websiteUrl(route)

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* OpenGraph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image.src} />
            <meta property="og:image:alt" content={image.alt} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image.src} />
            <meta name="twitter:image:alt" content={image.alt} />
        </NextHead>
    )
}

export default CHead

import type { Metadata } from "next"

const websiteDomain = "cosimomatteini.com"

export type MetaTagImage = {
    src: string
    alt: string
}

const baseUrl = () =>
    process.env.NODE_ENV === "development" ? `http://localhost:3000` : `https://${websiteDomain}`

export const websiteUrl = (route: string) => `${baseUrl()}${route}`

export const defaultImage: MetaTagImage = {
    src: websiteUrl("/base-og.jpg"),
    alt: websiteDomain,
}

type CreateMetadata = {
    title: string
    description: string
    image?: MetaTagImage
    showFullTitle?: boolean
    keywords?: string[]
}
export const createMetadata = ({
    title: initialTitle,
    description,
    image = defaultImage,
    showFullTitle = true,
    keywords,
}: CreateMetadata): Metadata => {
    const title = showFullTitle ? `${initialTitle} | ${websiteDomain}` : initialTitle
    return {
        title,
        description,
        keywords,

        // TODO: missing url. How can we implement has in old <Head> component?
        metadataBase: new URL(baseUrl()),

        openGraph: {
            type: "website",
            title,
            description,
            images: {
                url: image.src,
                alt: image.alt,
            },
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: {
                url: image.src,
                alt: image.alt,
            },
        },
    }
}

import type { Metadata } from "next"

export type MetaTagImage = {
    src: string
    alt: string
}

const baseUrl = () =>
    process.env.NODE_ENV === "development" ? `http://localhost:3000` : `https://cosimomatteini.com`

export const websiteUrl = (route: string) => `${baseUrl()}${route}`

export const defaultImage: MetaTagImage = {
    src: websiteUrl("/base-og.jpg"),
    alt: "cosimomatteini.com",
}

type CreateMetadata = {
    title: string
    description: string
    image?: MetaTagImage
}
export const createMetadata = ({
    title,
    description,
    image = defaultImage,
}: CreateMetadata): Metadata => ({
    title,
    description,
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
})

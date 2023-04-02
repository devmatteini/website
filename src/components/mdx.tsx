import React from "react"
import type { MDXComponents } from "mdx/types"
import NextLink from "next/link"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import clsx from "clsx"

const Link: MDXComponents["a"] = ({ href, ...props }) => {
    const isInternalLink = !!href && (href.startsWith("/") || href.startsWith("#"))

    if (isInternalLink) {
        // a.ref and Link.ref types are incompatible, so let's just leave it out :)
        const { ref, ...rest } = props
        return (
            <NextLink href={href} {...rest}>
                {props.children}
            </NextLink>
        )
    }

    return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
}

const Image: React.FC<NextImageProps> = (props) => {
    return <NextImage {...props} className={clsx("mb-4", props.className)} />
}

export const mdxComponents: MDXComponents = {
    a: Link,
    Image: Image,
}

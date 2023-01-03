import React from "react"
import type { MDXComponents } from "mdx/types"
import NextLink from "next/link"

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

export const mdxComponents: MDXComponents = {
    a: Link,
}

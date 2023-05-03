import React from "react"
import type { MDXComponents } from "mdx/types"
import NextLink from "next/link"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import clsx from "clsx"
import CopyButton from "./copy-button"

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

type PreProps = React.HTMLAttributes<HTMLPreElement> & { __rawContent__?: string }
const Pre: React.FC<PreProps> = ({ children, __rawContent__, ...props }) => {
    return (
        <>
            <pre {...props}>{children}</pre>
            {__rawContent__ && (
                <CopyButton className="absolute right-4 top-4" text={__rawContent__} />
            )}
        </>
    )
}

export const mdxComponents: MDXComponents = {
    a: Link,
    Image: Image,
    pre: Pre,
}

import React from "react"
import type { MDXComponents, Component } from "mdx/types"
import NextLink from "next/link"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import CopyButton from "./copy-button"
import { cn } from "../shared/cn"
import Alert from "./alert"

const Link: MDXComponents["a"] = ({ href, ...props }) => {
    if (!href) return null

    if (href.startsWith("/")) {
        // a.ref and Link.ref types are incompatible, so let's just leave it out :)
        const { ref: _, ...rest } = props
        return (
            <NextLink href={href} {...rest}>
                {props.children}
            </NextLink>
        )
    }
    if (href.startsWith("#")) return <a href={href} {...props} />

    return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
}

const Image: React.FC<NextImageProps> = (props) => {
    return <NextImage {...props} className={cn("mb-4", props.className)} />
}

type PreProps = React.HTMLAttributes<HTMLPreElement> & { __rawContent__?: string }
const Pre: React.FC<PreProps> = ({ children, __rawContent__, ...props }) => {
    return (
        <div className="mt-1 relative">
            <pre {...props}>{children}</pre>
            {__rawContent__ && (
                <CopyButton className="absolute right-2 top-2" text={__rawContent__} />
            )}
        </div>
    )
}

// NOTE: this type is needed because the mdx type for functional component is wrong
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = Component<any>

export const mdxComponents: MDXComponents = {
    a: Link,
    Image: Image as AnyComponent,
    pre: Pre as AnyComponent,
    Alert: Alert as AnyComponent,
}

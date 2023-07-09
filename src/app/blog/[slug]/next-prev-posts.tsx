import React from "react"
import NextLink from "next/link"
import { Post } from "../../../shared/posts"

type NextPrevPostsProps = {
    previous: Post | undefined
    next: Post | undefined
}

export const NextPrevPosts: React.FC<NextPrevPostsProps> = ({ previous, next }) => {
    return (
        <div className="flex gap-2 items-center text-gray2">
            &#8227;
            {previous && <Link href={previous.url} label="previous" />}
            {previous && next && <span>&#47;</span>}
            {next && <Link href={next.url} label="next" />}
        </div>
    )
}

const Link: React.FC<{ href: string; label: string }> = ({ href, label }) => (
    <NextLink className="border-b-0" href={href}>
        cd {label}
    </NextLink>
)

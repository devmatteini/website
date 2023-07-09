import React from "react"
import { websiteUrl } from "../../../shared/metadata"
import { Post } from "../../../shared/posts"

export const Comments: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="flex gap-2 items-center text-gray2">
            &#8227; <span>comment on</span>
            <a
                className="border-b-0"
                href={buildMastodonUrl(post)}
                target="_blank"
                rel="noopener noreferrer"
            >
                mastodon
            </a>
            /
            <a
                className="border-b-0"
                href={buildTwitterUrl(post)}
                target="_blank"
                rel="noopener noreferrer"
            >
                twitter
            </a>
        </div>
    )
}

const buildTwitterUrl = (post: Post) => {
    const url = websiteUrl(post.url)
    const text = `${post.title} by @MatteiniCosimo ${url}`
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
}

const buildMastodonUrl = (post: Post) => {
    const url = websiteUrl(post.url)
    const text = `${post.title} by @cosimomatteini ${url}`
    // DOCS: Cross-instance link to share on mastodon https://github.com/kytta/share2fedi
    return `https://toot.kytta.dev?text=${encodeURIComponent(text)}`
}

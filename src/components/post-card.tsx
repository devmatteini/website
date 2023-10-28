import NextLink from "next/link"
import React from "react"
import { formatDate } from "../shared/helpers/date"
import { ellipse } from "../shared/helpers/string"
import { Post } from "../shared/posts"

type PostCardProps = {
    post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="mb-6 flex">
            <span className="p-[2px] bg-gradient-to-b from-[#0038a6] to-[#c60c30]"></span>
            <article className="px-2 bg-black">
                <header>
                    <NextLink href={post.url}>
                        <p className="text-xl my-0 font-bold">
                            {post.title}
                            {PostStatus[post.status]}
                        </p>
                        <p className="mb-0">{formatDate(post.date)}</p>
                    </NextLink>
                </header>
                <p className="mt-2 break-words">{ellipse(post.description, 100)}</p>
                <Tags tags={post.tags} />
            </article>
        </div>
    )
}

const PostStatus: Record<Post["status"], React.ReactNode> = {
    published: null,
    draft: <span className="ml-2">[DRAFT]</span>,
    preview: <span className="ml-2">[PREVIEW]</span>,
}

type TagsProps = { tags: Post["tags"] }
const Tags: React.FC<TagsProps> = ({ tags }) => {
    if (!tags.length) return null
    return (
        <div className="flex gap-2 items-center">
            {tags.map((x, i) => (
                <span key={i} className="text-sm py-1 px-2 rounded-md bg-darkBlue">
                    {x}
                </span>
            ))}
        </div>
    )
}
export default PostCard

import Link from "next/link"
import React from "react"
import { formatDate } from "../shared/helpers/date"
import { ellipse } from "../shared/helpers/string"
import { Post } from "../shared/posts"
import Optional from "./optional"

type PostCardProps = {
    post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        // This div is needed to create the effect of gradient border for the inner div *
        <div className="mb-6 rounded p-1 bg-gradient-to-r from-[#0038a6] to-[#c60c30]">
            <div className="p-3 bg-black rounded">
                <Link href={post.url}>
                    <p className="text-xl my-0 font-bold">
                        {post.title}
                        <Optional condition={post.status === "draft"}>
                            <span className="ml-2">[DRAFT]</span>
                        </Optional>
                    </p>
                    <p className="mb-0">{formatDate(post.date)}</p>
                    <p className="mt-2 break-words">{ellipse(post.description, 100)}</p>
                </Link>
                <Tags tags={post.tags} />
            </div>
        </div>
    )
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

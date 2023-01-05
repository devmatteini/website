import Link from "next/link"
import React from "react"
import { formatDate } from "../shared/helpers/date"
import { Post } from "../shared/posts"

type PostCardProps = {
    post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link href={post.url}>
            {/* This div is needed to create the effect of gradient border for the inner div */}
            <div className="mb-6 rounded p-1 bg-gradient-to-r from-[#0038a6] to-[#c60c30]">
                <div className="p-3 bg-black rounded">
                    <h4 className="text-xl my-0 font-bold">{post.title}</h4>
                    <p className="mb-0">{formatDate(post.date)}</p>
                </div>
            </div>
        </Link>
    )
}

export default PostCard

import React from "react"
import Header from "../../components/header"
import PostCard from "../../components/post-card"
import { allPosts } from "../../shared/posts"
import { createMetadata } from "../../shared/metadata"

export const metadata = createMetadata({
    title: "Blog",
    description: "All blog posts",
})

const Blog: React.FC = () => {
    return (
        <>
            <Header />
            <h1 className="font-bold mb-5">All posts</h1>
            <div>
                {allPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </>
    )
}

export default Blog

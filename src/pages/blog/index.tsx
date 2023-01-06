import React from "react"
import Head from "next/head"
import BlogHeader from "../../components/blog-header"
import PostCard from "../../components/post-card"
import { allPosts } from "../../shared/posts"

const Blog: React.FC = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="All blog posts" />
            </Head>
            <div className="max-w-2xl px-4 mx-auto flex flex-col items-center">
                <div className="w-full">
                    <BlogHeader />
                    <h1 className="mt-8">All posts</h1>
                    <div>
                        {allPosts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog

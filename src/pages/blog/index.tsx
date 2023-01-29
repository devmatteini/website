import React from "react"
import Header from "../../components/header"
import PostCard from "../../components/post-card"
import { allPosts } from "../../shared/posts"
import CHead from "../../components/head"
import { useRouter } from "next/router"

const Blog: React.FC = () => {
    const router = useRouter()

    return (
        <>
            <CHead title="Blog" description="All blog posts" route={router.pathname} />
            <div className="w-full">
                <Header />
                <h1 className="font-bold mb-5">All posts</h1>
                <div>
                    {allPosts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog

import React from "react"
import Head from "next/head"
import Link from "next/link"
import { formatDate } from "../../shared/helpers/date"
import { allPosts } from "../../shared/posts"
import BlogHeader from "../../components/blog-header"

const Blog: React.FC = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className="max-w-2xl px-4 mx-auto flex flex-col items-center">
                <div className="w-full">
                    <BlogHeader />
                    <h1 className="mt-8">All posts</h1>
                    <div>
                        {allPosts.map((post) => (
                            <Link key={post._id} href={post.url}>
                                {/* This div is needed to create the effect of gradient border for the inner div */}
                                <div className="mb-6 rounded p-1 bg-gradient-to-r from-[#0038a6] to-[#c60c30]">
                                    <div className="p-3 bg-black rounded">
                                        <h4 className="text-xl my-0 font-bold">{post.title}</h4>
                                        <p className="mb-0">{formatDate(post.date)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog

import React from "react"
import { allPosts } from "contentlayer/generated"
import Link from "next/link"

const Home: React.FC = () => {
    return (
        <>
            <h1 className="font-bold mb-5">website</h1>

            <h2>Posts:</h2>
            {allPosts.map((post) => (
                <div key={post._id} className="mb-6">
                    <Link href={post.url} className="text-blue-700 hover:text-blue-900">
                        {post.title}
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Home

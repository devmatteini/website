import React from "react"
import { allPosts, first3 } from "../shared/posts"
import NextLink from "next/link"
import { BoxArrowInRightIcon } from "../components/icons"
import PostCard from "../components/post-card"
import { createMetadata } from "../shared/metadata"
import Header from "../components/header"

export const metadata = createMetadata({
    title: "Cosimo Matteini",
    description: "Software developer, TypeScript, Rust and Functional programming enthusiast",
})

const Home: React.FC = () => {
    return (
        <>
            <Header size="medium" />
            <div className="mt-5 text-center md:text-left">
                <h2 className="my-0 text-2xl">
                    Software developer building things with linux, typescript, rust and functional
                    programming.
                </h2>
            </div>
            <h3 className="mt-8">Recent posts</h3>
            {first3(allPosts).map((post) => (
                <PostCard key={post._id} post={post} />
            ))}
            <h3>
                <NextLink href="/blog" className="flex items-center">
                    All posts
                    <BoxArrowInRightIcon className="ml-2" />
                </NextLink>
            </h3>
        </>
    )
}

export default Home

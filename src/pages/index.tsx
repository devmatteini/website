import React from "react"
import Image from "next/image"
import profileImg from "../../public/profile.webp"
import { allPosts, first3 } from "../shared/posts"
import Link from "next/link"
import { BoxArrowInRightIcon } from "../components/icons"
import PostCard from "../components/post-card"
import CHead from "../components/head"
import { useRouter } from "next/router"

const Home: React.FC = () => {
    const router = useRouter()

    return (
        <>
            <CHead
                title="Cosimo Matteini"
                description="Software developer, TypeScript, Rust and Functional programming enthusiast"
                route={router.pathname}
            />
            <div className="max-w-2xl px-4 mx-auto flex flex-col items-center">
                <div className="w-full">
                    <div className="flex flex-col items-center text-center md:flex-row md:text-left">
                        <Image
                            className="w-20 h-20 rounded-full md:mr-4"
                            src={profileImg}
                            alt="Cosimo Matteini"
                            sizes="33vw"
                            priority
                        />
                        <h1 className="font-bold mb-5">Cosimo Matteini</h1>
                    </div>
                    <div className="mt-5 text-center md:text-left">
                        <h2 className="my-0 text-2xl">
                            Software developer building things with linux, typescript, rust and
                            functional programming.
                        </h2>
                    </div>

                    <h3 className="mt-8">Recent posts</h3>
                    {first3(allPosts).map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}

                    <h3>
                        <Link href="/blog" className="flex items-center">
                            All posts
                            <BoxArrowInRightIcon className="ml-2" />
                        </Link>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Home

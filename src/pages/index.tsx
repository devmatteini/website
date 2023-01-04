import React from "react"
import Image from "next/image"
import profileImg from "../../public/profile.webp"
import { allPosts, first3, firstN } from "../shared/posts"
import Link from "next/link"
import { formatDate } from "src/shared/helpers/date"

const Home: React.FC = () => {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center">
            <div>
                <div className="flex justify-between">
                    <Image className="w-24 rounded-full" src={profileImg} alt="Cosimo Matteini" />
                    <h1 className="font-bold mb-5">Cosimo Matteini</h1>
                </div>
                <div className="mt-5">
                    <h2 className="my-0 text-2xl">
                        Software developer building things with linux,
                    </h2>
                    <h2 className="my-0 text-2xl">typescript, rust and functional programming.</h2>
                </div>

                <h3 className="mt-8">Recent posts</h3>
                {first3(allPosts).map((post) => (
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
                {/* TODO: add "See more" that redirects to /blog */}
            </div>
        </div>
    )
}

export default Home

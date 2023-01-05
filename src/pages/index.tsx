import React from "react"
import Image from "next/image"
import profileImg from "../../public/profile.webp"
import { allPosts, first3 } from "../shared/posts"
import Link from "next/link"
import { formatDate } from "../shared/helpers/date"
import { BoxArrowInRightIcon } from "../components/icons"

const Home: React.FC = () => {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center">
            <div>
                <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
                    <Image
                        className="w-20 h-20 rounded-full"
                        src={profileImg}
                        alt="Cosimo Matteini"
                    />
                    <h1 className="font-bold mb-5">Cosimo Matteini</h1>
                </div>
                <div className="mt-5 text-center md:text-left">
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

                <h3>
                    <Link href="/blog" className="flex items-center">
                        All posts
                        <BoxArrowInRightIcon className="ml-2" />
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default Home

import React from "react"
import Image from "next/image"
import profileImg from "../../public/profile.webp"
import Link from "next/link"

type BlogHeaderProps = {}

const BlogHeader: React.FC<BlogHeaderProps> = ({}) => {
    return (
        <h1 className="mt-0 text-xl font-bold">
            <Link href="/" className="flex items-center">
                <Image
                    className="w-12 h-12 rounded-full mr-3"
                    src={profileImg}
                    alt="Cosimo Matteini"
                    sizes="33vw"
                    priority
                />
                Cosimo Matteini
            </Link>
        </h1>
    )
}

export default BlogHeader

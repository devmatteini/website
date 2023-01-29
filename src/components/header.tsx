import React from "react"
import Image from "next/image"
import profileImg from "../../public/profile.webp"
import NextLink from "next/link"
import clsx from "clsx"

const defaultStyle = ""

type HeaderSize = "small" | "medium"

const imageSizeStyle: Record<HeaderSize, string> = {
    small: "w-12 h-12",
    medium: "w-20 h-20",
}

const h1SizeStyle: Record<HeaderSize, string> = {
    small: "text-xl",
    medium: defaultStyle,
}

const linkStyle: Record<HeaderSize, string> = {
    small: "flex items-center",
    medium: "flex flex-col items-center text-center md:flex-row md:text-left",
}

type HeaderProps = {
    size?: HeaderSize
}
const Header: React.FC<HeaderProps> = ({ size = "small" }) => {
    return (
        <h1 className={clsx("mt-0 font-bold", h1SizeStyle[size])}>
            <NextLink href="/" className={linkStyle[size]}>
                <Image
                    className={clsx("rounded-full mr-3", imageSizeStyle[size])}
                    src={profileImg}
                    alt="Cosimo Matteini"
                    sizes="33vw"
                    priority
                />
                Cosimo Matteini
            </NextLink>
        </h1>
    )
}

export default Header

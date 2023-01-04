import React from "react"
import Image from "next/image"
import profileImg from "../../public/profile.webp"

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
            </div>
        </div>
    )
}

export default Home

import React from "react"
import { allPosts } from "../../../shared/posts"
import { useMDXComponent } from "next-contentlayer/hooks"
import { formatDate } from "../../../shared/helpers/date"
import { mdxComponents } from "../../../components/mdx"
import Header from "../../../components/header"
import { createMetadata } from "../../../shared/metadata"
import { notFound } from "next/navigation"

type Param = {
    slug: string
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#returns
export const generateStaticParams = (): Param[] =>
    allPosts.map((post) => ({
        slug: post.url,
    }))

// NOTE: params type is ReturnType<typeof generateStaticParams>[0]
type Props = { params: Param }

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#parameters
export const generateMetadata = ({ params }: Props) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) return
    return createMetadata({ title: post.title, description: post.description })
}

const Post: React.FC<Props> = ({ params }) => {
    const post = allPosts.find((post) => post.slug === params?.slug)
    if (!post) notFound()

    const MDXContent = useMDXComponent(post.body.code)

    return (
        <>
            <Header />
            <article>
                <header className="mb-6">
                    <h1 className="mb-1 font-bold">{post.title}</h1>
                    <p className="text-sm">{formatDate(post.date)}</p>
                </header>
                <MDXContent components={mdxComponents} />
            </article>
        </>
    )
}

export default Post

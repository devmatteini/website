import React from "react"
import { publishedOrPreviewPosts, findPost } from "../../../shared/posts"
import { useMDXComponent } from "next-contentlayer/hooks"
import { formatDate } from "../../../shared/helpers/date"
import { mdxComponents } from "../../../components/mdx"
import Header from "../../../components/header"
import { createMetadata } from "../../../shared/metadata"
import { notFound } from "next/navigation"
import { NextPrevPosts } from "./next-prev-posts"
import { Comments } from "./comments"

type Param = {
    slug: string
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#returns
export const generateStaticParams = (): Param[] =>
    publishedOrPreviewPosts.map((post) => ({
        slug: post.slug,
    }))

// NOTE: params type is ReturnType<typeof generateStaticParams>[0]
type Props = { params: Param }

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#parameters
export const generateMetadata = ({ params }: Props) => {
    const post = publishedOrPreviewPosts.find((post) => post.slug === params.slug)
    if (!post) return
    return createMetadata({ title: post.title, description: post.description })
}

const Post: React.FC<Props> = ({ params }) => {
    const { previous, current, next } = findPost(params.slug, publishedOrPreviewPosts)
    if (!current) notFound()

    const MDXContent = useMDXComponent(current.body.code)

    return (
        <>
            <Header />
            <article>
                <header className="mb-6">
                    <h1 className="mb-1 font-bold">{current.title}</h1>
                    <div className="flex gap-2 text-sm">
                        <p className="mb-0">{formatDate(current.date)}</p>
                        {current.updatedOn && (
                            <>
                                <span>&bull;</span>
                                <p className="mb-0">Updated on {formatDate(current.updatedOn)}</p>
                            </>
                        )}
                    </div>
                </header>
                <MDXContent components={mdxComponents} />
                <hr className="my-5 pb-0 border-t-3 border-dashed border-t-gray-500" />
                <footer className="mb-2">
                    {current.status === "published" && <Comments post={current} />}
                    <NextPrevPosts previous={previous} next={next} />
                </footer>
            </article>
        </>
    )
}

export default Post

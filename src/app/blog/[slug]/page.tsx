import React from "react"
import { publishedPosts, findPost } from "../../../shared/posts"
import { useMDXComponent } from "next-contentlayer/hooks"
import { formatDate } from "../../../shared/helpers/date"
import { mdxComponents } from "../../../components/mdx"
import Header from "../../../components/header"
import { createMetadata } from "../../../shared/metadata"
import { notFound } from "next/navigation"
import { NextPrevPosts } from "./next-prev-posts"
import { Comments } from "./comments"
import { CalendarIcon, ClockIcon, PenEditIcon } from "../../../components/icons"

type Param = {
    slug: string
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#returns
export const generateStaticParams = (): Param[] =>
    publishedPosts.map((post) => ({
        slug: post.slug,
    }))

// NOTE: params type is ReturnType<typeof generateStaticParams>[0]
type Props = { params: Param }

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#parameters
export const generateMetadata = ({ params }: Props) => {
    const { current } = findPost(params.slug, publishedPosts)
    if (!current) return
    return createMetadata({
        title: current.title,
        description: current.description,
        keywords: current.tags,
    })
}

const PostPage: React.FC<Props> = ({ params }) => {
    const { previous, current, next } = findPost(params.slug, publishedPosts)
    if (!current) notFound()

    const MDXContent = useMDXComponent(current.body.code)

    return (
        <>
            <Header />
            <article>
                <header className="mb-6">
                    <h1 className="mb-3 font-bold">{current.title}</h1>
                    <div className="flex gap-2 text-sm items-center flex-wrap">
                        <HeaderTag icon={<CalendarIcon />} text={formatDate(current.date)} />
                        {current.updatedOn && (
                            <HeaderTag
                                icon={<PenEditIcon />}
                                text={`Updated on ${formatDate(current.updatedOn)}`}
                            />
                        )}
                        <HeaderTag icon={<ClockIcon />} text={current.readingTime} />
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

const HeaderTag: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => {
    return (
        <p className="mb-0 py-1 px-2 rounded-md bg-inlineCode flex items-center gap-1">
            {icon}
            {text}
        </p>
    )
}

export default PostPage

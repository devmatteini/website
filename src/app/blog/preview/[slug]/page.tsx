import React from "react"
import { previewPosts, findPost } from "../../../../shared/posts"
import { useMDXComponent } from "next-contentlayer/hooks"
import { mdxComponents } from "../../../../components/mdx"
import Header from "../../../../components/header"
import { createMetadata } from "../../../../shared/metadata"
import { notFound } from "next/navigation"

type Param = {
    slug: string
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#returns
export const generateStaticParams = (): Param[] =>
    previewPosts.map((post) => ({
        slug: post.slug,
    }))

// NOTE: params type is ReturnType<typeof generateStaticParams>[0]
type Props = { params: Param }

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#parameters
export const generateMetadata = ({ params }: Props) => {
    const { current } = findPost(params.slug, previewPosts)
    if (!current) return
    return createMetadata({
        title: current.title,
        description: current.description,
        keywords: current.tags,
    })
}

const PreviewPostPage: React.FC<Props> = ({ params }) => {
    const { current } = findPost(params.slug, previewPosts)
    if (!current) notFound()

    const MDXContent = useMDXComponent(current.body.code)

    return (
        <>
            <Header />
            <article>
                <header className="mb-6">
                    <h1 className="mb-3 font-bold">{current.title}</h1>
                    <div className="flex gap-2 text-sm flex-wrap">
                        <p className="m-0 py-1 px-2 rounded-md uppercase font-bold bg-blue-500">
                            {current.status}
                        </p>
                    </div>
                </header>
                <MDXContent components={mdxComponents} />
            </article>
        </>
    )
}

export default PreviewPostPage

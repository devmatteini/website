import React from "react"
import Head from "next/head"
import type { GetStaticProps, InferGetStaticPropsType } from "next"
// TODO: use shared/posts
import { allPosts, Post } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { formatDate } from "../../shared/helpers/date"
import { mdxComponents } from "../../components/mdx"
import BlogHeader from "../../components/blog-header"

type PostProps = InferGetStaticPropsType<typeof getStaticProps>

const Post: React.FC<PostProps> = ({ post }) => {
    const MDXContent = useMDXComponent(post.body.code)

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <div className="p-6 pt-0">
                <BlogHeader />
                <article>
                    <div className="mb-6">
                        <h1 className="mb-1 font-bold">{post.title}</h1>
                        <p className="text-sm">{formatDate(post.date)}</p>
                    </div>
                    <MDXContent components={mdxComponents} />
                </article>
            </div>
        </>
    )
}

export const getStaticPaths = async () => {
    const paths = allPosts.map((post) => post.url)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({ params }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params?.slug)

    if (!post) return { notFound: true }

    return {
        props: {
            post,
        },
    }
}

export default Post

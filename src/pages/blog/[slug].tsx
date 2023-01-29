import React from "react"
import type { GetStaticProps, InferGetStaticPropsType } from "next"
import { allPosts, Post } from "../../shared/posts"
import { useMDXComponent } from "next-contentlayer/hooks"
import { formatDate } from "../../shared/helpers/date"
import { mdxComponents } from "../../components/mdx"
import Header from "../../components/header"
import CHead from "../../components/head"

type PostProps = InferGetStaticPropsType<typeof getStaticProps>

const Post: React.FC<PostProps> = ({ post }) => {
    const MDXContent = useMDXComponent(post.body.code)

    return (
        <>
            <CHead title={post.title} description={post.description} route={post.url} />
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

export const getStaticPaths = async () => {
    const paths = allPosts.map((post) => post.url)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params?.slug)

    if (!post) return { notFound: true }

    return {
        props: {
            post,
        },
    }
}

export default Post

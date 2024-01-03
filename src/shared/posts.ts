import type { CollectionEntry } from "astro:content"
import { getCollection } from "astro:content"
import readingTime from "reading-time"

type RawPost = CollectionEntry<"posts">

type EnrichedPostData = RawPost["data"] & {
    url: string
    readingTime: string
}

export type Post = Omit<RawPost, "data"> & { data: EnrichedPostData }

const byMostRecentDate = (a: Post, b: Post): number => b.data.date.getTime() - a.data.date.getTime()

const readyToPublish = (isDev: boolean) => (x: RawPost) => {
    if (isDev) return x.data.status === "draft" || x.data.status === "published"
    return x.data.status === "published"
}

const enrichPost = (x: RawPost): Post => ({
    ...x,
    data: {
        ...x.data,
        url: `/blog/${x.slug}`,
        readingTime: readingTime(x.body).text,
    },
})

export const publishedPosts = async (): Promise<Post[]> => {
    const posts = await getCollection("posts")
    return posts
        .filter(readyToPublish(import.meta.env.DEV))
        .map(enrichPost)
        .sort(byMostRecentDate)
}

export const firstN = (n: number) => (posts: Post[]) => posts.slice(0, n)
export const first3 = firstN(3)

export const findPrevNextPosts = <T extends Post>(
    currentSlug: string,
    posts: T[],
): { previous: T | undefined; next: T | undefined } => {
    const currentIndex = posts.findIndex((x) => x.slug === currentSlug)

    const previous = posts[currentIndex + 1]
    const next = posts[currentIndex - 1]

    return { previous, next }
}

export const uniqueKeywords = (post: Post["data"]) => new Set([...post.tags, ...post.seoKeywords])

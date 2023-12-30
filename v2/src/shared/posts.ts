import type { CollectionEntry } from "astro:content"
import { getCollection } from "astro:content"

export type Post = CollectionEntry<"posts">

const byMostRecentDate = (a: Post, b: Post): number => b.data.date.getTime() - a.data.date.getTime()

const readyToPublish = (isDev: boolean) => (x: Post) => {
    if (isDev) return x.data.status === "draft" || x.data.status === "published"
    return x.data.status === "published"
}

export const publishedPosts = async (): Promise<Post[]> => {
    const posts = await getCollection("posts")
    return posts.sort(byMostRecentDate).filter(readyToPublish(import.meta.env.DEV))
}

export const firstN = (n: number) => (posts: Post[]) => posts.slice(0, n)
export const first3 = firstN(3)

export const findPost = <T extends Post>(
    slug: string,
    posts: T[],
): { previous: T | undefined; current: T | undefined; next: T | undefined } => {
    const currentIndex = posts.findIndex((x) => x.slug === slug)

    const current = posts[currentIndex]
    const previous = posts[currentIndex + 1]
    const next = posts[currentIndex - 1]

    return { previous, current, next }
}

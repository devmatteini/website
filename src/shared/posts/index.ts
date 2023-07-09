import { allPosts as generatedPosts, Post as ContentLayerPost } from "contentlayer/generated"

export type Post = ContentLayerPost

const byMostRecentDate = (a: Post, b: Post): number => Date.parse(b.date) - Date.parse(a.date)

const isDev = process.env.NODE_ENV === "development"
const readyToPublish = (isDev: boolean) => (x: Post) => {
    if (isDev) return true
    return x.status === "published"
}

export const allPosts = generatedPosts.filter(readyToPublish(isDev)).sort(byMostRecentDate)

export const firstN = (n: number) => (posts: Post[]) => posts.slice(0, n)
export const first3 = firstN(3)

export const findPost = (
    slug: string,
    posts: Post[],
): { previous: Post | undefined; current: Post | undefined; next: Post | undefined } => {
    const currentIndex = posts.findIndex((x) => x.slug === slug)

    const current = posts[currentIndex]
    const previous = posts[currentIndex + 1]
    const next = posts[currentIndex - 1]

    return { previous, current, next }
}

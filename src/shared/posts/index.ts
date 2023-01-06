import { allPosts as generatedPosts, Post as ContentLayerPost } from "contentlayer/generated"

export type Post = Omit<ContentLayerPost, "tags"> & {
    tags: NonNullable<ContentLayerPost["tags"]>
}

const byMostRecentDate = (a: Post, b: Post): number => Date.parse(b.date) - Date.parse(a.date)

const isDev = process.env.NODE_ENV === "development"
const readyToPublish = (isDev: boolean) => (x: Post) => {
    if (isDev) return true
    return x.status === "published"
}
const toPost = (post: ContentLayerPost): Post => ({
    ...post,
    tags: post.tags || [],
})

export const allPosts = generatedPosts
    .map(toPost)
    .filter(readyToPublish(isDev))
    .sort(byMostRecentDate)

export const firstN = (n: number) => (posts: Post[]) => posts.slice(0, n)
export const first3 = firstN(3)

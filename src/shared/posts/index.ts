import { allPosts as generatedPosts, Post as ContentLayerPost } from "contentlayer/generated"

export type Post = ContentLayerPost

const byMostRecentDate = (a: Post, b: Post): number => Date.parse(b.date) - Date.parse(a.date)

type DraftOrPublishedPost = Post & { status: Exclude<Post["status"], "preview"> }
const readyToPublish =
    (isDev: boolean) =>
    (x: Post): x is DraftOrPublishedPost => {
        if (isDev) return x.status === "draft" || x.status === "published"
        return x.status === "published"
    }
type PreviewPost = Post & { status: "preview" }
const isPreview = (x: Post): x is PreviewPost => x.status === "preview"

const isDev = process.env.NODE_ENV === "development"
const orderedPosts = generatedPosts.sort(byMostRecentDate)
export const publishedPosts = orderedPosts.filter(readyToPublish(isDev))
export const previewPosts = orderedPosts.filter(isPreview)

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

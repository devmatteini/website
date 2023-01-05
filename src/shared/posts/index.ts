import { allPosts as generatedPosts, Post as ContentLayerPost } from "contentlayer/generated"

export type Post = ContentLayerPost

// TODO: add field to Post with Date type instead of just string
const byMostRecentDate = (a: Post, b: Post): number => Date.parse(b.date) - Date.parse(a.date)

export const allPosts = generatedPosts.sort(byMostRecentDate)

export const firstN = (n: number) => (posts: Post[]) => posts.slice(0, n)
export const first3 = firstN(3)

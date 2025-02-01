import { type Post, publishedPosts } from "@shared/blog"

export type TagEntry = Post

export type Tag = {
    name: string
    url: string
    entries: TagEntry[]
}

const groupBy = <T>(array: T[], key: (value: T) => string) =>
    array.reduce(
        (acc, value) => {
            ;(acc[key(value)] ||= []).push(value)
            return acc
        },
        {} as { [key: string]: T[] },
    )

const expandPostsByTag = (posts: Post[]) =>
    posts.flatMap((post) => post.data.tags.map((tag) => ({ ...post, tag })))

const enrichTag = (tag: string, entries: TagEntry[]): Tag => ({
    name: tag,
    url: `/tags/${tag}`,
    entries,
})

export const publishedTags = async (): Promise<Tag[]> => {
    const source = await publishedPosts()
    const tags = groupBy(expandPostsByTag(source), (x) => x.tag)
    return Object.entries(tags).map(([tag, entries]) => enrichTag(tag, entries))
}

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

export const tagUrl = (tag: string) => `/tags/${tag}`

const enrichTag = (tag: string, entries: TagEntry[]): Tag => ({
    name: tag,
    url: tagUrl(tag),
    // TODO: sort by byMostRecentDate
    entries,
})

const byName = (a: Tag, b: Tag): number => a.name.localeCompare(b.name)

export const publishedTags = async (): Promise<Tag[]> => {
    const source = await publishedPosts()
    const tags = groupBy(expandPostsByTag(source), (x) => x.tag)
    return Object.entries(tags)
        .map(([tag, entries]) => enrichTag(tag, entries))
        .sort(byName)
}

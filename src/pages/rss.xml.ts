import rss from "@astrojs/rss"
import { publishedPosts } from "@shared/blog"
import type { APIRoute } from "astro"

export const GET: APIRoute = async (context) => {
    const blog = await publishedPosts()
    // TODO: extract default url to @config
    const site = context.site ?? new URL("https://cosimomatteini.com")

    return rss({
        title: "Cosimo Matteini's Blog",
        description: "",
        site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.updatedOn ?? post.data.date,
            description: post.data.description,
            link: post.data.url,
        })),
        customData: "<language>en-us</language>",
    })
}

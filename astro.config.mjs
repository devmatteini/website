import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { autoLinkHeadingOptions } from "./config/rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import { prettyCodePlugins } from "./config/pretty-code"
import { isAnalyticsEnabled } from "./config/analytics"
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
    site: "https://cosimomatteini.com",
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, autoLinkHeadingOptions],
            prettyCodePlugins,
        ],
    },
    integrations: [tailwind(), icon(), mdx()],
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: isAnalyticsEnabled,
        },
    }),
})

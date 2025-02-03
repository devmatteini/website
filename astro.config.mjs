import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { autoLinkHeadingOptions } from "./config/rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import { prettyCodePlugins } from "./config/pretty-code"
import { isAnalyticsEnabled } from "./config/analytics"
import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import { fixAstroVercelSitemap } from "./fix-astro-vercel-sitemap"
import { baseUrl } from "./config/site"

// https://astro.build/config
export default defineConfig({
    site: baseUrl(),
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, autoLinkHeadingOptions],
            prettyCodePlugins,
        ],
    },
    integrations: [tailwind(), icon(), mdx(), sitemap(), fixAstroVercelSitemap()],
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: isAnalyticsEnabled,
        },
    }),
})

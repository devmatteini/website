import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { autoLinkHeadingOptions } from "./config/rehype-autolink-headings"
import rehypeSlug from "rehype-slug"

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autoLinkHeadingOptions]],
    },
    integrations: [tailwind(), icon(), mdx()],
})

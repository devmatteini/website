import { autoLinkHeadingOptions } from "./config/rehype-autolink-headings"
import { makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import prettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { documentTypes } from "./config/contentlayer"
import { prettyCodeOptions } from "./config/pretty-code"

export default makeSource({
    contentDirPath: "posts",
    documentTypes,
    mdx: {
        rehypePlugins: [
            [prettyCode, prettyCodeOptions],
            rehypeSlug,
            [rehypeAutolinkHeadings, autoLinkHeadingOptions],
        ],
    },
})

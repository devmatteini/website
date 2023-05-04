import { autoLinkHeadingOptions } from "./config/rehype-autolink-headings"
import { makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import { documentTypes } from "./config/contentlayer"
import { prettyCodePlugins } from "./config/pretty-code"

export default makeSource({
    contentDirPath: "posts",
    documentTypes,
    disableImportAliasWarning: true,
    onMissingOrIncompatibleData: "fail",
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, autoLinkHeadingOptions],
            ...prettyCodePlugins,
        ],
    },
})

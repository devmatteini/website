import { autoLinkHeadingOptions } from "./config/rehype-autolink-headings"
import { makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import prettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { documentTypes } from "./config/contentlayer"
import { prettyCodeOptions } from "./config/pretty-code"
import { visit } from "unist-util-visit"

export default makeSource({
    contentDirPath: "posts",
    documentTypes,
    disableImportAliasWarning: true,
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, autoLinkHeadingOptions],
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === "element" && node?.tagName === "pre") {
                        const [codeEl] = node.children

                        if (codeEl.tagName !== "code") return

                        node.__rawContent__ = codeEl.children?.[0].value
                    }
                })
            },
            [prettyCode, prettyCodeOptions],
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === "element" && node?.tagName === "div") {
                        if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                            return
                        }

                        for (const child of node.children) {
                            if (child.tagName === "pre") {
                                child.properties["__rawContent__"] = node.__rawContent__
                            }
                        }
                    }
                })
            },
        ],
    },
})

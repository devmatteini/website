import { autoLinkHeadingOptions } from "./config/rehype-autolink-headings"
import { makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import prettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { documentTypes } from "./config/contentlayer"
import { prettyCodeOptions } from "./config/pretty-code"
import { visit } from "unist-util-visit"

const __rawContent__ = "__rawContent__"

const isType = (node: any, expectedType: string) => node?.type === expectedType
const isElementType = (node: any) => isType(node, "element")
const isTagName = (node: any, expectedTagName: string) => node?.tagName === expectedTagName
const isPreTag = (node: any) => isTagName(node, "pre")
const isDivTag = (node: any) => isTagName(node, "div")

const extractContentFromCodeBlocks = (tree: any) => {
    visit(tree, (node) => {
        if (isElementType(node) && isPreTag(node)) {
            const [codeEl] = node.children

            if (!isTagName(codeEl, "code")) return

            node[__rawContent__] = codeEl.children?.[0].value
        }
    })
}

const injectCodeBlocksWithContentAfterSyntaxHighlight = (tree: any) => {
    visit(tree, (node) => {
        if (isElementType(node) && isDivTag(node)) {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                return
            }

            for (const child of node.children) {
                if (isPreTag(child)) {
                    child.properties[__rawContent__] = node[__rawContent__]
                }
            }
        }
    })
}

// TODO: can we improve the types?
const prettyCodePlugins: [any, any, any] = [
    () => (tree: any) => extractContentFromCodeBlocks(tree),
    [prettyCode, prettyCodeOptions],
    () => (tree: any) => injectCodeBlocksWithContentAfterSyntaxHighlight(tree),
]

export default makeSource({
    contentDirPath: "posts",
    documentTypes,
    disableImportAliasWarning: true,
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, autoLinkHeadingOptions],
            ...prettyCodePlugins,
        ],
    },
})

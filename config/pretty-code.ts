// DOCS: https://rehype-pretty-code.netlify.app/
import type { Options } from "rehype-pretty-code"
import prettyCode from "rehype-pretty-code"
import { visit } from "unist-util-visit"

const __rawContent__ = "__rawContent__"

const prettyCodeOptions: Partial<Options> = {
    theme: "github-dark",
    onVisitHighlightedLine(node) {
        node.properties.className.push("line--highlighted")
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ["word--highlighted"]
    },
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }]
        }
    },
}

const extractContentFromCodeBlocks = (tree: any) => {
    visit(tree, (node) => {
        if (!(isElementType(node) && isPreTag(node))) return

        const [codeEl] = node.children
        if (!isTagName(codeEl, "code")) return

        node[__rawContent__] = codeEl.children?.[0].value
    })
}

const injectCodeBlocksWithContentAfterSyntaxHighlight = (tree: any) => {
    visit(tree, (node) => {
        if (!(isElementType(node) && isDivTag(node))) return
        if (!("data-rehype-pretty-code-fragment" in node.properties)) return

        for (const child of node.children) {
            if (isPreTag(child)) {
                child.properties[__rawContent__] = node[__rawContent__]
            }
        }
    })
}

// TODO: can we improve the types?
export const prettyCodePlugins: [any, any, any] = [
    () => (tree: any) => extractContentFromCodeBlocks(tree),
    [prettyCode, prettyCodeOptions],
    () => (tree: any) => injectCodeBlocksWithContentAfterSyntaxHighlight(tree),
]

const isType = (node: any, expectedType: string) => node?.type === expectedType
const isElementType = (node: any) => isType(node, "element")
const isTagName = (node: any, expectedTagName: string) => node?.tagName === expectedTagName
const isPreTag = (node: any) => isTagName(node, "pre")
const isDivTag = (node: any) => isTagName(node, "div")

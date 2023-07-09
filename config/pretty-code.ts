// DOCS: https://rehype-pretty-code.netlify.app/
import type { Options } from "rehype-pretty-code"
import prettyCode from "rehype-pretty-code"
import { visit } from "unist-util-visit"

const __rawContent__ = "__rawContent__"

const prettyCodeOptions: Partial<Options> = {
    theme: "github-dark",
    keepBackground: false,
}

const extractContentFromCodeBlocks = (tree: any) => {
    visit(tree, (node) => {
        if (!(isElementType(node) && isPreTag(node))) return

        const [codeEl] = node.children
        if (!isCodeTag(codeEl)) return

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
const isCodeTag = (node: any) => isTagName(node, "code")

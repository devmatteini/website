// DOCS: https://rehype-pretty-code.netlify.app/
import type { Options } from "rehype-pretty-code"

export const prettyCodeOptions: Partial<Options> = {
    theme: "github-dark",
    onVisitHighlightedLine(node) {
        node.properties.className.push("line--highlighted")
    },
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }]
        }
    },
}

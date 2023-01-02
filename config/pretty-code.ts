// DOCS: https://rehype-pretty-code.netlify.app/
import type { Options } from "rehype-pretty-code"

export const prettyCodeOptions: Partial<Options> = {
    theme: "github-dark",
    onVisitHighlightedLine(node) {
        node.properties.className.push("line--highlighted")
    },
}

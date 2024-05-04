// DOCS: https://rehype-pretty-code.netlify.app/
import type { Options } from "rehype-pretty-code"
import prettyCode from "rehype-pretty-code"

const prettyCodeOptions: Partial<Options> = {
    theme: "github-dark",
    keepBackground: false,
    defaultLang: {
        block: "text",
    },
}

export const prettyCodePlugins = [prettyCode, prettyCodeOptions]

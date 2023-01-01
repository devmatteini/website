import { makeSource } from "contentlayer/source-files"
import prettyCode from "rehype-pretty-code"
import { documentTypes } from "./config/contentlayer"
import { prettyCodeOptions } from "./config/pretty-code"

export default makeSource({
    contentDirPath: "posts",
    documentTypes,
    mdx: {
        rehypePlugins: [[prettyCode, prettyCodeOptions]],
    },
})

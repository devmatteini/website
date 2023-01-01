import { defineDocumentType, makeSource } from "contentlayer/source-files"
import prettyCode, { Options as PrettyCodeOptions } from "rehype-pretty-code"

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: "**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        date: {
            type: "date",
            description: "The date of the post",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => `/blog/${post._raw.flattenedPath}`,
        },
    },
}))

// DOCS: https://rehype-pretty-code.netlify.app/
const prettyCodeOptions: Partial<PrettyCodeOptions> = {
    theme: "github-dark",
}

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [[prettyCode, prettyCodeOptions]],
    },
})

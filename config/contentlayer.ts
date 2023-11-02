import { defineDocumentType } from "contentlayer/source-files"

// https://www.contentlayer.dev/docs/sources/files/mapping-document-types
const Post = defineDocumentType(() => ({
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
        updatedOn: {
            type: "date",
            description: "The date the post was updated",
        },
        status: {
            type: "enum",
            options: ["draft", "preview", "published"],
            description: "The status of the post",
            required: true,
        },
        description: {
            type: "string",
            description: "The short description of the post",
            required: true,
        },
        tags: {
            type: "list",
            of: { type: "string" },
            description: "The list of tags to help understand what a post talks about",
            default: [],
            required: false,
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (post) => post._raw.flattenedPath,
        },
        url: {
            type: "string",
            resolve: (post) => {
                if (post.status === "preview") return `/blog/preview/${post._raw.flattenedPath}`
                return `/blog/${post._raw.flattenedPath}`
            },
        },
    },
}))

export const documentTypes = [Post]

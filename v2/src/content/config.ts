import { defineCollection, z } from "astro:content"

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        updatedOn: z.date().optional(),
        status: z.enum(["draft", "published"]),
        description: z.string(),
        tags: z.array(z.string()).default([]),
    }),
})

export const collections = {
    posts,
}

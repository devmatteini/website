import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const Tag = z
    .string()
    .toLowerCase()
    .superRefine((data, ctx) => {
        if (/\s/.test(data)) {
            ctx.addIssue({
                code: "custom",
                message: `Tag must not contain whitespaces: ${data}`,
            })
        }
    })

const blog = defineCollection({
    // NOTE: base is relative to the project root
    loader: glob({ base: "./blog", pattern: "**/*.{md,mdx}" }),
    schema: z
        .object({
            title: z.string(),
            date: z.date(),
            updatedOn: z.date().optional(),
            status: z.enum(["draft", "published"]),
            description: z.string(),
            tags: z.array(Tag).default([]),
            seoKeywords: z.array(z.string()).default([]),
            tableOfContents: z.boolean().default(false),
        })
        .superRefine((data, ctx) => {
            if (data.updatedOn && data.updatedOn <= data.date) {
                ctx.addIssue({
                    code: "custom",
                    path: ["updatedOn"],
                    message: `updatedOn (${data.updatedOn.toISOString()}) must be greater than date (${data.date.toISOString()})`,
                })
            }
        }),
})

export const collections = {
    blog,
}

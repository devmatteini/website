import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const Tag = z
    .string()
    .toLowerCase()
    .superRefine((data, ctx) => {
        if (/\s/.test(data)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ctx.path,
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
                    code: z.ZodIssueCode.invalid_date,
                    path: ["updatedOn"],
                    message: `updatedOn (${data.updatedOn.toISOString()}) must be greater than date (${data.date.toISOString()})`,
                })
            }
        }),
})

export const collections = {
    blog,
}

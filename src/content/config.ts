import { defineCollection, z } from "astro:content"

const posts = defineCollection({
    type: "content",
    schema: z
        .object({
            title: z.string(),
            date: z.date(),
            updatedOn: z.date().optional(),
            status: z.enum(["draft", "published"]),
            description: z.string(),
            tags: z.array(z.string()).default([]),
            seoKeywords: z.array(z.string()).default([]),
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
    posts,
}

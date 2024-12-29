import type { AstroIntegration } from "astro"
import { readdir, cp } from "node:fs/promises"
import * as path from "node:path"

const integrationName = "fix-astro-vercel-sitemap"
const DIST_DIR = "./dist"
const VERCEL_OUTPUT_DIR = "./.vercel/output/static"

// https://github.com/withastro/adapters/issues/445
export const fixAstroVercelSitemap = (): AstroIntegration => ({
    name: integrationName,
    hooks: {
        "astro:build:done": async ({ logger }) => {
            const buildLogger = logger.fork(integrationName)
            try {
                const files = await readdir(DIST_DIR)
                const sitemaps = files.filter(
                    (file) =>
                        path.extname(file).toLowerCase() === ".xml" &&
                        path.basename(file).toLowerCase().startsWith("sitemap"),
                )
                for (const sitemap of sitemaps) {
                    const sourcePath = path.join(DIST_DIR, sitemap)
                    const destPath = path.join(VERCEL_OUTPUT_DIR, sitemap)
                    await cp(sourcePath, destPath)
                }
                buildLogger.info(`Copied ${sitemaps.length} sitemaps to ${VERCEL_OUTPUT_DIR}`)
            } catch (error) {
                buildLogger.error(`Error copying files: ${error}`)
            }
        },
    },
})

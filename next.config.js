const prettyCode = require("rehype-pretty-code")

// DOCS: https://rehype-pretty-code.netlify.app/
/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
    theme: "github-dark",
}
const rehypePrettyCode = [prettyCode, prettyCodeOptions]

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [rehypePrettyCode],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "md", "mdx"],
})

module.exports = nextConfig

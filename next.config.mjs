import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
    reactStrictMode: true,
    webpack: (config) => {
        // https://github.com/contentlayerdev/contentlayer/issues/313
        config.infrastructureLogging = {
            level: "error",
        }

        return config
    },
})

export default nextConfig

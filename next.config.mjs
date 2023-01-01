import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
    reactStrictMode: true,
})

export default nextConfig

import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                black: "#202229",
                darkBlue: "#18181e",
                orange2: "#ffa657",
                inlineCode: "#37393f",
                gray2: "#BBBBBB",
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/pages/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./config/**/*.{ts,tsx}",
        "./posts/**/*.mdx",
    ],
    theme: {
        extend: {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./posts/**/*.mdx"],
    theme: {
        extend: {
            colors: {
                black: "#202229",
                darkBlue: "#18181e",
            },
        },
    },
    plugins: [],
}

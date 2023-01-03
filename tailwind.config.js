/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{ts,tsx}", "./posts/**/*.mdx"],
    theme: {
        extend: {
            colors: {
                black: "#202229",
            },
        },
    },
    plugins: [],
}

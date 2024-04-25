import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./config/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // iceland inspired colors
                blackSand: {
                    500: "#131418", // base color
                    600: "#0f1013",
                    700: "#0b0c0e",
                },
                volcanoOrange: "#ff5a22",
                iceBlue: "#40afcc",
                grayRock: "#424346",
            },
        },
    },
    plugins: [],
}

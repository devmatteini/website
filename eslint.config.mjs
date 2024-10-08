import js from "@eslint/js"
import astro from "eslint-plugin-astro"
import ts from "typescript-eslint"
import prettier from "eslint-config-prettier"

export default [
    js.configs.recommended,
    prettier,
    ...ts.configs.recommended,
    ...astro.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
]

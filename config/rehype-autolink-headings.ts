import type { Options } from "rehype-autolink-headings"

const removeBorder = "no-underline"
const showHashOnHover =
    "after:content-['#'] after:absolute after:text-transparent hover:after:text-volcanoOrange"

export const autoLinkHeadingOptions: Partial<Options> = {
    behavior: "wrap",
    properties: {
        className: `${removeBorder} ${showHashOnHover}`,
    },
}

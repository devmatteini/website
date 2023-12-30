import type { Options } from "rehype-autolink-headings"

const removeBorder = "border-0"
const showHashOnHover =
    "after:content-['#'] after:absolute after:text-transparent hover:after:text-orange2"

export const autoLinkHeadingOptions: Partial<Options> = {
    behavior: "wrap",
    properties: {
        className: `${removeBorder} ${showHashOnHover}`,
    },
}

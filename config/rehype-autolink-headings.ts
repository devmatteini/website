import type { Options } from "rehype-autolink-headings"

const removeBorder = "border-0"
const showHashOnHover =
    "before:content-['#'] before:absolute before:-ml-6 before:text-transparent hover:before:text-orange2"

export const autoLinkHeadingOptions: Partial<Options> = {
    behavior: "wrap",
    properties: {
        className: `${removeBorder} ${showHashOnHover}`,
    },
}

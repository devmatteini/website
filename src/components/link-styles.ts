import { cn } from "@shared/cn"

export type Variant = "default" | "underline"

const stylesByVariant: Record<Variant, string> = {
    default: "",
    underline: "underline underline-offset-4 decoration-2 decoration-volcanoOrange",
}

export const linkStyles = (variant: Variant) =>
    cn(stylesByVariant[variant], "hover:text-volcanoOrange")

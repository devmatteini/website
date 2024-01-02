import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// https://github.com/shadcn-ui/ui/blob/91727ec4602a741127318d859ccf40ebf944d2e8/templates/next-template/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

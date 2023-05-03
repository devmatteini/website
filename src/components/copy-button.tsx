import React, { useState } from "react"
import { CheckIcon, CopyIcon } from "./icons"
import clsx from "clsx"

type Props = {
    text: string
    className?: string
}
const CopyButton: React.FC<Props> = ({ text, className }) => {
    const [isCopied, setIsCopied] = useState(false)

    const copy = async () => {
        await navigator.clipboard.writeText(text)
        setIsCopied(true)

        // Reset state after 2s after copying text
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }

    return (
        <button
            className={clsx(
                className,
                "z-20 w-6 h-6 inline-flex items-center justify-center transition-all rounded-md hover:border focus:outline-none",
            )}
            disabled={isCopied}
            onClick={copy}
        >
            <span className="sr-only">Copy</span>
            {isCopied ? <CheckIcon /> : <CopyIcon />}
        </button>
    )
}

export default CopyButton

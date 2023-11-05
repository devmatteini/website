import React, { PropsWithChildren } from "react"
import { cn } from "../shared/cn"
import { InfoCircleIcon, WarningIcon } from "./icons"

type Props = {
    variant: "info" | "warning"
}

const icon: Record<Props["variant"], React.ReactNode> = {
    info: <InfoCircleIcon />,
    warning: <WarningIcon />,
}

const Alert: React.FC<PropsWithChildren<Props>> = ({ children, variant }) => {
    return (
        <div
            className={cn("p-4 mb-4 border rounded flex", {
                "bg-blue-900/25 text-blue-200 border-blue-200/50": variant === "info",
                "bg-orange-400/20 text-orange-300 border-orange-300/50": variant === "warning",
            })}
        >
            <div className="text-base mr-4">{icon[variant]}</div>
            <div className="w-full min-w-0 text-sm">{children}</div>
        </div>
    )
}

export default Alert

import React from "react"
import { cn } from "../shared/cn"

type ContainerProps = React.PropsWithChildren<{
    className?: string
}>

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className={cn("max-w-4xl px-4 mx-auto flex flex-col", className)}>{children}</div>
}

export default Container

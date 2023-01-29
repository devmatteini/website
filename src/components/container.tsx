import React from "react"
import clsx from "clsx"

type ContainerProps = React.PropsWithChildren<{
    className?: string
}>

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className={clsx("max-w-3xl px-4 mx-auto flex flex-col", className)}>{children}</div>
}

export default Container

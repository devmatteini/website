import React from "react"

type OptionalProps = React.PropsWithChildren<{
    condition: boolean
}>

const Optional: React.FC<OptionalProps> = ({ condition, children }) => {
    if (!condition) return null
    return <>{children}</>
}

export default Optional

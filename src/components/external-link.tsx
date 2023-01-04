import React from "react"

type ExternalLinkProps = React.PropsWithChildren<{
    href: string
    className?: string
}>

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, className, children }) => (
    <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
    </a>
)

export default ExternalLink

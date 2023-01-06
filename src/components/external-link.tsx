import React from "react"

type ExternalLinkProps = React.PropsWithChildren<{
    href: string
    ariaLabel: string
    className?: string
}>

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, className, ariaLabel, children }) => (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        {children}
    </a>
)

export default ExternalLink

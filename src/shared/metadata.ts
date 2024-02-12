export const websiteDomain = "cosimomatteini.com"

const baseUrl = () => (import.meta.env.DEV ? `http://localhost:4321` : `https://${websiteDomain}`)

export const websiteUrl = (route: string) => `${baseUrl()}${route}`

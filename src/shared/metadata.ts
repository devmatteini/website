export const websiteDomain = "cosimomatteini.com"

const baseUrl = () => (import.meta.env.DEV ? `http://localhost:3000` : `https://${websiteDomain}`)

export const websiteUrl = (route: string) => `${baseUrl()}${route}`

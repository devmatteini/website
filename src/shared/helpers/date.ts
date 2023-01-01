const currentLocale = undefined

export const formatDate = (rawDate: string, locale?: string | string[]) => {
    const date = new Date(rawDate)
    const formatter = new Intl.DateTimeFormat(locale || currentLocale, {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
    return formatter.format(date)
}

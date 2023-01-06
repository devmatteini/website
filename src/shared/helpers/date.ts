export const formatDate = (rawDate: string) => {
    const date = new Date(rawDate)
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return formatter.format(date)
}

export const formatDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return formatter.format(date)
}

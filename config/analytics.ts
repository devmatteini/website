export const isAnalyticsEnabled = import.meta.env.DEV
    ? process.env.ANALYTICS_DEBUG === "true"
    : true

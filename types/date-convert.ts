export const convertDate = (value: string | Date) => {
    const date = new Date(value);
    return date
        ? `${date.toLocaleDateString("en-us", {
            weekday: "short",
        })}, ${date.toLocaleDateString("en-us", {
            day: "numeric",
        })} ${date.toLocaleDateString("en-us", {
            month: "short",
        })} ${date.toLocaleDateString("en-us", {
            year: "numeric",
        })} | ${date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        })}`
        : "";
}
const getDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
        hour12: false,
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
};

const getTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
};

const getDateTime = () => {
    return `${getDate()}`;
};

export { getDate, getTime, getDateTime };
const getFutureDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toDateString();
};

console.log(getFutureDate(100));
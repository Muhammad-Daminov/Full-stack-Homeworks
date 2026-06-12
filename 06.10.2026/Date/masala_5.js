function getPastDate(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toDateString();
}

console.log(getPastDate(50));
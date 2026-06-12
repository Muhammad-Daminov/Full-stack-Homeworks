const getPreviousFriday = (dateStr) => {
    const date = new Date(dateStr);
    const resultDate = new Date(date);
    const day = date.getDay();
    const diff = day >= 5 ? day - 5 : day + 2;
    resultDate.setDate(date.getDate() - (diff || 7));
    return resultDate.toDateString();
};

console.log(getPreviousFriday("2026-06-12"));
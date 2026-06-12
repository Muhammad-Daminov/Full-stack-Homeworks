const countWorkDaysBetween = (dateStr1, dateStr2) => {
    const start = new Date(dateStr1);
    const end = new Date(dateStr2);
    let count = 0;
    while (start <= end) {
        const day = start.getDay();
        if (day !== 0 && day !== 6) count++;
        start.setDate(start.getDate() + 1);
    }
    return count;
};

console.log(countWorkDaysBetween("2026-06-01", "2026-06-12"));
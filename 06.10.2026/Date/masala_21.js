const countWeekendsInYear = function(year) {
    const date = new Date(year, 0, 1);
    let count = 0;
    while (date.getFullYear() === year) {
        const day = date.getDay();
        if (day === 0 || day === 6) count++;
        date.setDate(date.getDate() + 1);
    }
    return count;
};

console.log(countWeekendsInYear(2026));
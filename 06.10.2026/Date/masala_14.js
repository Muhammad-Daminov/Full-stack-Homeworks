function countSundays(year, month) {
    const date = new Date(year, month, 1);
    let count = 0;
    while (date.getMonth() === month) {
        if (date.getDay() === 0) count++;
        date.setDate(date.getDate() + 1);
    }
    return count;
}

console.log(countSundays(2026, 5));
function generateCalendar(year, month) {
    const date = new Date(year, month, 1);
    const calendar = [];
    while (date.getMonth() === month) {
        calendar.push({
            date: date.getDate(),
            day: date.getDay()
        });
        date.setDate(date.getDate() + 1);
    }
    return calendar;
}

console.log(generateCalendar(2026, 5));
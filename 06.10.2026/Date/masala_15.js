const getWeeksBetween = function(dateStr1, dateStr2) {
    const d1 = new Date(dateStr1);
    const d2 = new Date(dateStr2);
    const diffMs = Math.abs(d2 - d1);
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return Math.floor(days / 7);
};

console.log(getWeeksBetween("2026-06-01", "2026-06-22"));
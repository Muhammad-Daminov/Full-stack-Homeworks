const getDaysBetween = function(dateStr1, dateStr2) {
    const d1 = new Date(dateStr1);
    const d2 = new Date(dateStr2);
    const diffMs = Math.abs(d2 - d1);
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24)) + " kun";
};

console.log(getDaysBetween("2025-01-01", "2025-02-01"));
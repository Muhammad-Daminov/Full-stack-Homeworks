const getNextMonday = function(dateStr) {
    const date = new Date(dateStr);
    const resultDate = new Date(date);
    resultDate.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7 || 7);
    return resultDate.toDateString();
};

console.log(getNextMonday("2026-06-12"));
const getMonthName = function(dateStr) {
    const date = new Date(dateStr);
    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
    return months[date.getMonth()];
};

console.log(getMonthName("2026-06-12"));
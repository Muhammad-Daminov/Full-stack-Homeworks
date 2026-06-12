const getFirstDayOfYear = function(year) {
    const date = new Date(year, 0, 1);
    const days = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
    return days[date.getDay()];
};

console.log(getFirstDayOfYear(2026));
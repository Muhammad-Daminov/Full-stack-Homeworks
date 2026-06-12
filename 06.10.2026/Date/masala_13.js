const getLastDayOfYear = (year) => {
    const date = new Date(year, 11, 31);
    const days = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
    return days[date.getDay()];
};

console.log(getLastDayOfYear(2026));
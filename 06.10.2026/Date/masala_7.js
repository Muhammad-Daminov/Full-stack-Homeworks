const checkDayType = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDay();
    return (day === 0 || day === 6) ? "Dam olish kuni" : "Ish kuni";
};

console.log(checkDayType("2026-06-12"));
function getDaysInCurrentMonth() {
    const today = new Date();
    const year = today.getUTCFullYear();
    const months = today.getMonth();
    
    const lastDayOfMonth = new Date(year, months + 1, 0);
    return lastDayOfMonth.getDate();
}
console.log(getDaysInCurrentMonth());

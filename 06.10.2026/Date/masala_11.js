function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Ertalab";
    if (hour >= 12 && hour < 17) return "Kunduzi";
    if (hour >= 17 && hour < 22) return "Kechqurun";
    return "Tunda";
}

console.log(getTimeOfDay());
function getMonthsSinceProduction(prodDateStr) {
    const prodDate = new Date(prodDateStr);
    const now = new Date();
    return (now.getFullYear() - prodDate.getFullYear()) * 12 + (now.getMonth() - prodDate.getMonth());
}

console.log(getMonthsSinceProduction("2025-10-10"));
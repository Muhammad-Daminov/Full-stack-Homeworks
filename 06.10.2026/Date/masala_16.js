const getDaysUntilMonthEnd = () => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return endOfMonth.getDate() - now.getDate();
};

console.log(getDaysUntilMonthEnd());
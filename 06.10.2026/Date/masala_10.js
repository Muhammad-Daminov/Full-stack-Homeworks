const getDaysLived = (birthDateStr) => {
    const birthDate = new Date(birthDateStr);
    const now = new Date();
    const diffMs = now - birthDate;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

console.log(getDaysLived("2005-01-15"));
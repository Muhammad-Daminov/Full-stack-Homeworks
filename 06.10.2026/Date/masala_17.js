function getDaysUntilNextBirthday(birthDateStr) {
    const now = new Date();
    const birthDate = new Date(birthDateStr);
    const nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    const diffMs = nextBirthday - now;
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

console.log(getDaysUntilNextBirthday("2005-06-20"));
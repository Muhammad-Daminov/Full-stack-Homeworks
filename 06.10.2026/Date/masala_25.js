const getLifeStats = function(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const now = new Date();
    
    const diffMs = now - birthDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const years = now.getFullYear() - birthDate.getFullYear();
    const months = (years * 12) + (now.getMonth() - birthDate.getMonth());
    
    return {
        yosh: years,
        kunlar: days,
        oylar: months,
        yillar: years
    };
};

console.log(getLifeStats("2005-01-15"));
const getDaysUntilNewYear = function() {
    
    const today = new Date();
    const currentYear = today.getUTCFullYear();
    
    const nextNewYear = new Date(currentYear + 1, 0,1);
    
    const Ms = nextNewYear - today
    const daysleft = Math.ceil(Ms / (24 * 60 * 60 *1000));
    
    return daysleft;
}

console.log(getDaysUntilNewYear());
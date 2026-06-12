function compareRoundingMethods() {
    let randomNum = (Math.random() * -10).toFixed(2); 
    let num = parseFloat(randomNum);

    return {
        originalnum: num,
        trunc: Math.trunc(num), 
        floor: Math.floor(num), 
        ceil: Math.ceil(num)    
    };
}

console.log(compareRoundingMethods());
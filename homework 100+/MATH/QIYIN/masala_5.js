function averageOfFive() {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += Math.floor(Math.random() * 100); 
    }
    return sum / 5;
}

console.log(averageOfFive()); 

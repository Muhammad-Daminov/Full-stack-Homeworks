function yuzdanKattami() {
    let randomNum = Math.floor(Math.random() * 20) + 1;
    console.log(`Random son: ${randomNum}`);
    
    return Math.pow(randomNum, 2) > 100;
}

console.log(yuzdanKattami()); 

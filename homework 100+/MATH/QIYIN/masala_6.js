function check3And5() {
    let randomNum = Math.floor(Math.random() * 100) + 1; 
    console.log(`Random son: ${randomNum}`);
    
    return randomNum % 3 === 0 && randomNum % 5 === 0;
}

console.log(check3And5()); 

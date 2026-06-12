function checkPowerAndSqrt() {
    let randomNum = Math.floor(Math.random() * 10) + 1; 
    
    let kvadrat = Math.pow(randomNum, 2);  
    let n = Math.sqrt(kvadrat);  

    return {
        boshlangichSon: randomNum,
        kvadrati: kvadrat,
        num: n,
        n1: randomNum === n
    };
}

console.log(checkPowerAndSqrt());
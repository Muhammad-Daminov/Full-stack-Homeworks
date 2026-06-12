function getDivisors(son){
    divisors = [];
    
    for (let i = 1; i <= son; i++){
        if(son % i == 0){
            divisors.push(i);
           
        }
    }
    return divisors;
}

console.log(getDivisors(12));
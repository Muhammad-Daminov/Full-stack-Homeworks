const countTubSon = (n) => {
    let count = 0;
    
    for (let i = 2; i <= n;i++) {
        let tubSon = true;
        
        for (let j = 2; j < i; j++){
            if (i % j === 0) {
                tubSon = false;
                break;
            }
        }
        if (tubSon === true) {
            count++;
        }
    }
    
    return count;
}

console.log(countTubSon(10));
console.log(countTubSon(20))
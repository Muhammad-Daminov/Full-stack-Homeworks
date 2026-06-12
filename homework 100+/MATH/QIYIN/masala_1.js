let num = Math.floor(Math.random() * 100) + 1; 
let n = num > 1; 

for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        n = false;
        break;
    }
}
console.log(n);
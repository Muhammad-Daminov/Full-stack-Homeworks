function findMaxOfThree() {
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);
    let n3 = Math.floor(Math.random() * 100);
    
    console.log(`Sonlar: ${n1}, ${n2}, ${n3}`);
    return Math.max(n1, n2, n3);
}

console.log(findMaxOfThree()); 

let digit1 = +prompt("1 chi sonni kiriting: ");
let digit2 = +prompt("2 chi sonni kiriting: ");
let digit3 = +prompt("3 chi sonni kiriting: ");

let largest = digit1;

if (digit2 > largest){
    largest = digit2;
}
if (digit3 > largest){
    largest = digit3;
}
console.log("Katta son: ", largest);

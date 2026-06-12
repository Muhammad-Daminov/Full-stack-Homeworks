let str = prompt("matn kiriting: ");
let count = 0;
let i = 0;

while(str[i] !== undefined){
    if (str[i] !== " "){
        count++;
    }
    i++;
}
console.log("Matn uzunligi: ", count);
const countSpaces = (str) => {
    count = 0;
    for (let i in str) {
        if (str[i] === " "){
            count++;
        }
    }
    return count;
}
console.log(countSpaces("Najot Talim full stack"));
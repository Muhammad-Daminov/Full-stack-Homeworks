function longestString(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(longestString(["olma", "anor", "shaftoli", "behi"])); 

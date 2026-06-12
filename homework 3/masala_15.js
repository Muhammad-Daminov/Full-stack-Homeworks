const isPalindrome = (text) => {

    let cleanText = text.toLowerCase();
    

    let reversedText = '';


    for (let i = cleanText.length - 1; i >= 0; i--) {
        reversedText += cleanText[i];
    }

    return cleanText === reversedText;
};

console.log(isPalindrome('Kiyik'));
console.log(isPalindrome('coder')); 
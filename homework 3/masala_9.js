const capitalizeWords = (str) => {
    const words = str.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = word[0].toUpperCase() + word.slice(1);
        result.push(newWord);
    }

    return result.join(' ');
};

console.log(capitalizeWords('javascript backend developer'));
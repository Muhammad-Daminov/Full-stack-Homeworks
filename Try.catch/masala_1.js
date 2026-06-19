function countVowels(text) {
    try {
        if (typeof text == 'string') {
            const vowels = ['a', 'e', 'i', 'o', 'u'];
        
            const words = text.split(' ');
        
            return words.reduce((result, word) => {
                if (word.length > 0) {
                    const count = word.toLowerCase().split('').filter(char => vowels.includes    (char)).length;
                    result[word] = count;
                }
                return result;
            }, {})
        }
        else {
            throw new Error("Text faqat harf va probellardan iborat bolishi kerak!!!");
        };
    } catch (error) {
        console.error(error.massage);
        return {};
    }
}

console.log(countVowels("JavaScript"));  
console.log(countVowels("Salom Dunyo"));
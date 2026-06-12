const sumNumbersInText = (text) => {
    const words = text.split(' ');
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
        let num = Number(words[i]);
        
        if (!isNaN(num)) {
            sum += num;
        }
    }

    return sum;
};

console.log(sumNumbersInText('Ali 20 yoshda va 5 yil tajribaga ega'));
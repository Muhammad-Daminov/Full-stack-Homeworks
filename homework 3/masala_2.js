const MaxWordSize = (word) => {
    let text = word.split(" ");
    let max_word = text[0];
    for (let i = 0; i < text.length; i++) {
        if (text[i].length > max_word.length) {
            max_word = text[i];
        }
    }
    return  max_word;
}

console.log(MaxWordSize("Hala Madrid Best of The Best"));
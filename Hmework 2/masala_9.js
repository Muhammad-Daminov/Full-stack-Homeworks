const countVowels = (str) => {
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    console.log(`Matnda ${count} ta unli harf bor`);
};

let str = "Najot Talim full stack n29";

countVowels(str)
const isPalindrome = (n) => {
    let original = n;
    let reversed = 0;

    while (n > 0) {
        let qoldiq = n % 10;
        reversed = (reversed * 10) + qoldiq;
        n = parseInt(n / 10);
    }

    return original === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
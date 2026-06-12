const yaxlitlash = (son) => {
    let qoldiq = son % 10; 

    if (qoldiq >= 5) {
        return son - qoldiq + 10;
    } else {
        return son - qoldiq;
    }
};

console.log(yaxlitlash(24));
console.log(yaxlitlash(27));
console.log(yaxlitlash(25));
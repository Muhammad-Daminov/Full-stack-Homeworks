class Calculator {
    static operationCount = 0;
    
    add(number1,number2){
        Calculator.operationCount ++;
        return number1 + number2
    }
    subtract(number1,number2){
        Calculator.operationCount ++;
        return number1 - number2
    }
    multiply(number1,number2){
        Calculator.operationCount ++;
        return number1 * number2
    }
    divide(number1,number2){
        Calculator.operationCount ++;
        return number1 / number2
    }
    getStats(){
        return `Jami bajarilgan amallar: ${Calculator.operationCount}`
    }
}
const calc = new Calculator()
console.log(calc.add(1,2))
console.log(calc.subtract(10,2))
console.log(calc.multiply(2,2))
console.log(calc.divide(6,2))
console.log(calc.getStats())
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    if (num1 === 0 || num2 === 0){
        return 0;
    }
    return num1 * num2;
}

function divide(num1, num2){
    if (num1 === 0) return 0;
    if (num2 === 0) return `ERROR! Cannot divide by 0`;
    return num1 / num2;
}

let numberOne = 0;
let numberTwo = 0;
let operatorSign = '';

function operate(numberOne,operatorSign, numberTwo){
    let result = 0;
    switch(operatorSign){     
        case '+':
            result = add(numberOne,numberTwo);
            break;
        case '-':
            result = subtract(numberOne,numberTwo);
            break;
        case '*':
            result = multiply(numberOne,numberTwo);
            break;
        case '/':
            result = divide(numberOne,numberTwo);
            break;
        default:
            alert(`Invalid operator`);
    }
    return result;
}
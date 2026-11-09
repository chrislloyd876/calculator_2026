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

let firstNumber = 0;
let secondNumber = 0;
let operatorSign = '';
let result = 0;
let isScreenReset = true;

function operate(firstNumber,operatorSign, secondNumber){
    switch(operatorSign){     
        case '+':
            result = add(firstNumber,secondNumber);
            break;
        case '-':
            result = subtract(firstNumber,secondNumber);
            break;
        case '*':
            result = multiply(firstNumber,secondNumber);
            break;
        case '/':
            result = divide(firstNumber,secondNumber);
            break;
        default:
            alert(`Invalid operator`);
    }
    return result;
}

function getNumber(){
   return parseFloat(display.value); 
}

function clearScreen(){
        firstNumber = 0;
        secondNumber = 0;
        operatorSign = '';
        display.value = '0';
        result = 0;
}


const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
        if(display.value == 0 || isScreenReset == true){
            display.value = '';
            isScreenReset = false;
        }
        display.value += e.target.textContent;

    });
});

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click',(e) => {
    if (display.value.includes('.')) return;
    if (display.value === '' || display.value === '0'){
        display.value = '0.';
    } else {
        display.value += '.';
    }
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', (e) => {
        let newResult;
        if(e.target.textContent === 'CLEAR'){
            clearScreen();              
        } else if(operatorSign != '' && firstNumber != null){
            secondNumber = getNumber();
            newResult = operate(firstNumber,operatorSign,secondNumber);
            operatorSign = e.target.textContent;
            display.value = newResult;
            firstNumber = newResult;
            secondNumber = 0;
            newResult = 0;
            isScreenReset = true;
        }
         else if(e.target.textContent === '='){
            secondNumber = getNumber();
            newResult = operate(firstNumber,operatorSign,secondNumber);
            display.value = newResult;
            firstNumber = newResult;
            secondNumber = 0;
            newResult = 0;
            isScreenReset = true;
            operatorSign = '';
        } else {
        firstNumber = getNumber();
        operatorSign = e.target.textContent;
        isScreenReset = true;
        }
    });
});
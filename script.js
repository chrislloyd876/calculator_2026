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
let result = 0;

function operate(numberOne,operatorSign, numberTwo){
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

function getFirstNumber(){
   return parseInt(display.value); 
}

function clearScreen(){
        numberOne = 0;
        numberTwo = 0;
        operatorSign = '';
        display.value = 0;
}


const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
    display.value += e.target.textContent;
    });
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', (e) => {
        if(e.target.textContent === 'CLEAR'){
            clearScreen();              
        }
        if(e.target.textContent === '='){
            numberTwo += parseInt(display.value);
            let newResult = operate(numberOne,operatorSign,numberTwo);
            display.value = newResult;
            numberOne = newResult;
            numberTwo = 0;
            newResult = 0;
        } else {
            numberOne = getFirstNumber();
            operatorSign = e.target.textContent;
            console.log(operatorSign);
            display.value += e.target.textContent;
            display.value = '';
        }
    });
});
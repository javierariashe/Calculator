const operators = "/*-+";

// Basic Operations

add = (a,b) => a+b;
subsract = (a,b) => a-b;
multiply = (a,b) => a*b;
divide = (a,b) => a/b;

function operate(number1, operator, number2) {
    number1 = Number(number1);
    number2 = Number(number2);

    switch(operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subsract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            console.log("Operador invalido"); 
            return "ERROR";
    }
}

function pressButton(button) {
    let displayNumber = "";

    if(!isNaN(parseInt(button))) {
        displayNumber = pressNumber(button);
    }
    else if(button === '.') {
        displayNumber = pressPoint(button);
    }
    else if(operators.includes(button)) {
        displayNumber = pressOperator(button);
        return;
    }
    else if(button === "=") {
        displayNumber = pressEquals(button);
    }
    else {
        displayNumber = pressDelete(button);
    }

    if(displayNumber % 1 != 0) displayNumber = parseFloat(displayNumber).toFixed(4);
    if(displayNumber == 'Infinity' || displayNumber == '-Infinity') displayNumber = "ERROR";
    screen.textContent = displayNumber;
}

function pressNumber(button) {
    if(answer) {
        previousNumber = currentNumber; 
        currentNumber = "";
        answer = false;
    }
    currentNumber += button;
    return currentNumber;
}

function pressPoint(button) {
    if(point) return;

    if(answer) {
        previousNumber = currentNumber; 
        currentNumber = "";
        answer = false;
    }
    currentNumber += button;
    point = true;
    return currentNumber;
}

function pressOperator(button) {
    if(operator != "") {
        currentNumber = operate(previousNumber, operator, currentNumber);
    }
    operator = button;
    previousNumber = currentNumber;
    currentNumber = "";
    point = false;

    if(answer) answer = false;
    screen.textContent = previousNumber;
    return previousNumber;
}

function pressEquals(button) {
    let result = operate(previousNumber, operator, currentNumber);
    currentNumber = String(result);
    answer = true;
    point = false;
    operator = "";
    return currentNumber;
}

function pressDelete(button) {
    if (button == 'clear') {
        currentNumber = "";
        previousNumber = "";
        operator = "";
    }
    else {
        currentNumber = currentNumber.slice(0, -1);
    }
    return currentNumber;
}

//init

const screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("td");

let previousNumber = "";
let currentNumber = "";
let operator = "";
let answer = false;
let point = false;

buttons.forEach((button) => {
    if(button.id === "empty") return;
    button.addEventListener('click', ()=>{
        pressButton(button.id);
    });
});
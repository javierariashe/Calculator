// Basic Operations

add = (a,b) => a+b;
subsract = (a,b) => a-b;
multiply = (a,b) => a*b;
divide = (a,b) => a/b;

function read(string) {
    let operation = string.split(" ");
    if(operation.length != 3) {
        console.log("Incorrect format. 'number' 'operator 'number'.");
        return "ERROR";
    }

    number1 = Number(operation[0]);
    operator = operation[1];
    number2 = Number(operation[2]);

    switch(operator) {
        case "+":
            console.log(add(number1, number2));
            break;
        case "-":
            console.log(subsract(number1, number2));
            break;
        case "*":
            console.log(multiply(number1, number2));
            break;
        case "/":
            console.log(divide(number1, number2));
            break;
        default:
            console.log("Operador invalido"); 
            return "ERROR";
            break;
    }
}

read("4 + 3");
read("10 * 2");


let a = 5; 
let b = 3; 
let operand1; 
let operand2 = "+-*/"; 


let operation = "+"; 

switch (operation) {
    case "+":
        operand1 = a + b;
        break;
    case "-":
        operand1 = a - b;
        break;
    case "*":
        operand1 = a * b;
        break;
    case "/":
        operand1 = a / b;
        break;
    default:
        operand1 = "Неизвестная операция";
}

console.log(operand1); 

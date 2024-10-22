let a = 5;
let b = 3;


let operant = '+';

switch (operant) {
    case 1:
        operant = '+'
        console.log(operant == a + b)
        break;
    case 2:
        operant = '-'
        console.log(operant == a - b)
        break;
    case 3:
        operant = '*'
        console.log(operant == a * b)
        break;
    case 4:
        operant = '/'
        console.log(operant == a / b)
        break;

    
}

console.log(operant)

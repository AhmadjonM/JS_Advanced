//Задача №1: Конвертация температуры:
function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}


const temperatureF = 68;
const temperatureC = convertToCelsius(temperatureF);
console.log(`${temperatureF}°F равно ${temperatureC.toFixed(2)}°C`);


// Задача №2: Подсчёт гласных в строке:
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


const exampleString = "Hello, World!";
const vowelCount = countVowels(exampleString);
console.log(`Количество гласных в строке: ${vowelCount}`);

// Задача №3: Проверка, является ли число простым:
let dataOutput = ["является простым:","является непростым:"]
function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;  

 
    if (num % 2 === 0 || num % 3 === 0) return false;


    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; 
}

const number = 9;
if (isPrime(number) === true) {
    console.log(number + " " + dataOutput[0] + " "+ isPrime(number)); 
}
else {
    console.log(number + " " + dataOutput[1] + " "+ isPrime(number)); 
}
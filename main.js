
//1 Конвертация строк в заглавные буквы:
let text = ['{"обычная", "бесполезная", "строка"}',
            '{"вторая", "бесполезная", "строка"}',
            '{"третья", "бесполезная", "строка"}']

const convertToUppercase = (textArray) => {
    return textArray.map(item => item.toUpperCase())    
}

let resultUpperCase = convertToUppercase(text);
console.log(resultUpperCase);

//2 Увеличение возрастов на 1 год:
const peoples = [{Name:"Konan",Surname:"Warwar",Age: 19},
                 {Name:"John",Surname:"Davey",Age: 15},
                 {Name:"Kirill",Surname:"Ivanov",Age: 23}]

const increaseAges = (peoplesArray) => {
    return peoplesArray.map(person => {
        return{...person, Age: person.Age + 1
        };
    })

}

let updateAges = increaseAges(peoples);

console.log(updateAges)

//3 Квадрат каждого числа:

const numbers = [2,5,6,7,8]

function sumArray(num) {
    let result = 0;
    for (let element of num) {
        console.log(element **2);
    }
}

sumArray(numbers)

//Задачи для forEach:

//1 Вывод элементов массива:
let elements = [1,2,3, true,7,false,'Kirill']

const ouytputElements = () => {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        console.log(element)
    }

}

ouytputElements(elements)

//2 Суммирование элементов массива:
const integers = [4, 10, 2, 7, 9];

function sumArray(num) {
    let result = 0;  
    for (let element of num) {
        result += element;
    }
    console.log(result);
}

sumArray(integers); 


 let products = [{name: "aplle", price: 100},{name: "aplle", price: 100}]
 let priceProducts = products.map(price => ({...price, price: products.price * 10 / products.price * products.price}))
 console.log(priceProducts);

 const namePeople = [
    { Name: "Konan", Age: 19 },
    { Name: "John", Age: 15 },
    { Name: "Kirill", Age: 23 }
];

function parseJSON(a) {
    a.forEach(person => {
        if ("Surname" in person) {
            console.log(person["Surname"]); 
        } else {
            console.log("Свойство 'Surname' не найдено");
        }
    });
}

parseJSON(namePeople);




const propertyValue = [{Name:"Konan",Surname:"Warwar",Age: 19},
    {Name:"John",Surname:"Davey",Age: 15},
    {Name:"Kirill",Surname:"Ivanov",Age: 23}]

    function getProperty(a) {
        try {
            if (a["Surname"]) {
                return a["Surname"]
            }
        } catch (error) {
            console.log("Ошибка: свойство не найдено");
                        
        }
    }
    propertyValue.forEach(obj => {
        console.log(getProperty(obj));
    });

    function divideNumbers(a, b) {
        try {
            if (b === 0 || a ==  0) {
                throw new Error("Ошибка: деление на ноль невозможно.");
            }
            else{
            return a / b;
            }
        } catch (error) {
            return error.message; 
        }
    }
    
    console.log(divideNumbers(5,10));

//Задание 2.1: Создание объекта с вложенными объектами.
const library = {
    name: "Central City Library",
    location: "123 Main Street, Central City",
    books: {
        total: 5000,
        genres: [
            {
                genreName: "Вымышленные",
                books: [
                    { title: "To Kill a Mockingbird"},
                    { title: "1984"}
                ]
            },
            {
                genreName: "Научная фантастика",
                books: [
                    { title: "Dune"},
                    { title: "Neuromancer"}
                ]
            },
            {
                genreName: "Научно-популярная литература",
                books: [
                    { title: "Sapiens: A Brief History of Humankind"},
                    { title: "Educated"}
                ]
            }
        ]
    }
};

console.log("Название:", library.name);
console.log("местоположение:", library.location);
console.log("Количество книг:", library.books.total);
console.log("Жанры:");

library.books.genres.forEach(genre => {
    console.log("- Жанр:", genre.genreName);
    genre.books.forEach(book => {
        console.log(`${book.title}`);
    });
});


//Задание 2.2: Массив объектов.
const studentsInfo = [
    {
        name:"kirill",
        age:13,
        grades:[4,4,5,3,3]
    },
    {
        name:"john",
        age:15,
        grades:[5,5,5,4,4]
    },
    {
        name:"Ilya",
        age:14,
        grades:[3,3,4,3,5]
    },
    {
        name:"Denis",
        age:14,
        grades:[3,4,5,2,3]
    },
    {
        name:"Gleb",
        age:16,
        grades:[4,4,4,5,3]
    }
]


function sumArray(num) {
    let result = 0;
    for (let element of num) {
        result += element;
    }
    let average = result / num.length;
    return Math.round(average)
}

for (let i = 0; i < studentsInfo.length; i++) {
    console.log(`Ученик: ${studentsInfo[i].name} Средняя оценка: ${sumArray(studentsInfo[i].grades)} `);
}

//Задание 2.3: Работа с массивами в объектах.
let storeInventory = {
    fruits: [
        { name: "Apple", price: 1.2 },
        { name: "Banana", price: 0.5 },
        { name: "Orange", price: 0.8 }
    ],
    vegetables: [
        { name: "Carrot", price: 0.7 },
        { name: "Broccoli", price: 1.5 },
        { name: "Tomato", price: 1.0 }
    ],
    dairy: [
        { name: "Milk", price: 1.1 },
        { name: "Cheese", price: 2.5 },
        { name: "Yogurt", price: 1.3 }
    ],
    bakery: [
        { name: "Bread", price: 1.2 },
        { name: "Croissant", price: 1.0 },
        { name: "Bagel", price: 0.9 }
    ],
};

for (let category in storeInventory) {
    console.log(`Категория: ${category}`);
    storeInventory[category].forEach(item => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}

//Задание 2.4: Вложенные объекты и методы.
let car = {
    make:"Toyota",
    model:"AE86",
    engine: {
        typeOfEngine: "бензиновый ",
        engineLocation:"переднее, поперечное ",
        engineVolume:"1452 см³",
        typeOfBoost:"нет",
        maxPower: "85 л.с. (63 кВт) при 5600 об/мин",
        maxTorque:"118 Н*м при 3600 об/мин",
        cylinderArrangement:"рядное",
        sumOfCylinders:4,
        sumOFValvesPerCylinder:2,
        enginePowerSupplySystem: "карбюратор ",
        compressionRatio: 9.3,
        cylinderDiameterAndPistonStroke:"77.5x77 мм",
        modelOfEngine:"3a-u "
    },
}

let start = "Двигатель запустился";
console.log(start)
//метода start не существует поэтому вот просто переменная start

console.log(`Марка: ${car.make} модель:${car.model}`);
console.log(`Информация об двигателе:
    Тип двигателя:${car.engine.typeOfEngine}
    Расположение двигателя:${car.engine.engineLocation}
    Объем двигателя:${car.engine.engineVolume}
    Тип наддува:${car.engine.typeOfBoost}
    Максимальная мощность: ${car.engine.maxPower}
    Максимальный крутящий момент: ${car.engine.maxTorque}
    Расположение цилиндров:${car.engine.cylinderArrangement}
    Количество цилиндров:${car.engine.sumOfCylinders}
    Число клапанов на цилиндр: ${car.engine.sumOFValvesPerCylinder}
    Система питания двигателя:${car.engine.enginePowerSupplySystem}
    Степень сжатия:${car.engine.compressionRatio}
    Диаметр цилиндра и ход поршня: ${car.engine.cylinderDiameterAndPistonStroke}
    Модель двигателя:${car.engine.modelOfEngine}
`)

const team = {
    name: "Tigers",
    players: [
        { name: "Alex", position: "Forward" },
        { name: "Ben", position: "Goalkeeper" },
        { name: "Chris", position: "Defender" },
        { name: "David", position: "Midfielder" },
        { name: "Evan", position: "Forward" }
    ]
};

for (let i = 0; i < team.players.length; i++) {
    console.log(`Игрок: ${team.players[i].name}, Позиция: ${team.players[i].position}`);
}


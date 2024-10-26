let initialPrice = 100; 
let increaseRate = 0.10;
let days = 7; 

let price = initialPrice;

for (let i = 0; i < days; i++) {
    price += price * increaseRate; 
}

console.log("Цена товара через 7 дней: " + price.toFixed(2) + " рублей");

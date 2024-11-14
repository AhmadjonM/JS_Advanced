class Animal {
    name;
    species;

    constructor(uname, uspecies) {
        this.name = uname;
        this.species = uspecies;
    }

    introduce() {
        console.log(`Вид животного: ${this.name} - ${this.species}`);
    }
}

const animal1 = new Animal("Лев", "хищник");
const animal2 = new Animal("Корова", "домашний скот");
const animal3 = new Animal("Жираф", "дикое животное");
const animal4 = new Animal("Кошка", "домашнее животное");

animal1.introduce();

class Dog extends Animal {
    breed;

    constructor(name, species, breed) {
        super(name, species);
        this.breed = breed;
    }

    bark() {
        console.log(`Я собака ${this.name}, ${this.species} породa: ${this.breed}, и я гавкаю.`);
    }
}

const dog1 = new Dog("Шарик", "домашнее животное", "немецкая овчарка");

dog1.introduce();
dog1.bark();


class MathHelper {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

console.log(MathHelper.add(5, 3));
console.log(MathHelper.subtract(10, 4));

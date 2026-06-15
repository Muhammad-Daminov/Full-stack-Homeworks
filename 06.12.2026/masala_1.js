class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    getInfo() {
        return `Nomi: ${this.name}, yoshi: ${this.age}, nasl: ${this.breed}`;
    }
}

const dog = new Dog('Rex', 2, 'Apcharka');
console.log(dog.getInfo());
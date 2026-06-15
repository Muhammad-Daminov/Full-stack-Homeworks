class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

class Warrior extends Character {
    constructor(name, level, attackPower) {
        super(name, level);
        this.attackPower = attackPower;
    }

    calculateDamage = () => this.attackPower * this.level;
}

const knight = new Warrior("Arthur", 10, 45);
console.log(knight.calculateDamage());
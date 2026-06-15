class Character {
    constructor(name) {
        this.name = name;
    }
}

class Mage extends Character {
    constructor(name, mana, spellPower) {
        super(name);
        this.mana = mana;
        this.spellPower = spellPower;
    }

    castSpell = function() {
        if (this.mana >= 20) {
            return this.spellPower * 2;
        }
        return "No enough mana";
    };
}

const wizard = new Mage("Gandalf", 50, 80);
console.log(wizard.castSpell());
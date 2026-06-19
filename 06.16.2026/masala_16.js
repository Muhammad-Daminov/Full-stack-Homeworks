class Employee {
    static companyName = "Najot talim";
    #salary = 0;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    increaseSalary(percent) {
        this.#salary += (this.#salary * percent) / 100;
        console.log(`${percent}%ga oshdi.`);
    }

    getSalary() {
        return this.#salary;
    }
}
const Foundation = new Employee("test",100)
console.log(Foundation.getSalary())
Foundation.increaseSalary(30)
class Phone {
  static maxBattery = 100;
  #battery = 100;

  charge(amount) {
    this.#battery += amount;
    if (this.#battery > Phone.maxBattery) {
        this.#battery = Phone.maxBattery;}
    console.log(` ${this.#battery}%`);
  }

  use(amount) {
    this.#battery -= amount;
    if (this.#battery < 0) {
        this.#battery = 0;}
    console.log(`zaryad: ${this.#battery}%`);
  }
}

const phone = new Phone();
phone.use(40);
phone.charge(20);
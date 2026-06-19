class Car {
  static maxSpeed = 300;
  #speed = 0;

  constructor(brand) {
    this.brand = brand;
  }

  accelerate(speed) {
    this.#speed += speed;
    if (this.#speed > Car.maxSpeed) {
      this.#speed = Car.maxSpeed;
    }
    console.log(`tezlik: ${this.#speed} km/s`);
  }

  brake(speed) {
    this.#speed -= speed;
    if (this.#speed < 0) this.#speed = 0;
    console.log(`tezlik: ${this.#speed} km/s`);
  }

  getSpeed() {
    return this.#speed;
  }
}

const car = new Car('Supra');
car.accelerate(200);
car.brake(90);
console.log(car.getSpeed());
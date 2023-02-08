class ObjectUtils {
  showFields() {
    for (let key in this) {
      console.log(`${key}:${this[key]}`);
    }
  }
}
class Car extends ObjectUtils {
  constructor(model, color) {
    super();
    this._model = model;
    this.color = color;
  }
  //   showModel = function () {
  //     console.log(this.model);
  //   };
  get model() {
    return this._model;
  }
  getInfo() {
    return `Model:${this._model}. Color: ${this.color}.`;
  }
}
// const car = new Car("Audi");
// console.log(car.model);

class BMW extends Car {
  constructor(model, color, speed) {
    super(model, color);
    this.speed = speed;
  }
  getInfo() {
    let res = super.getInfo() + ` Speed:${this.speed}.`;
    console.log(res);
  }
}
const car = new BMW("X5", "red", 300);
console.log(car);
car.getInfo();

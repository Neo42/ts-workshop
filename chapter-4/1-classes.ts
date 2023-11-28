abstract class EdibleThing {
  name: string;
  color?: string; // optional property

  abstract eat(): void;

  constructor(name: string, color?: string) {
    this.name = name;
    if (color) {
      this.color = color;
    }
  }
}

class Fruit extends EdibleThing {
  sweetness: number = 0; // default property value

  constructor(name: string, sweetness: number, color?: string) {
    super(name, color);
    this.sweetness = sweetness;
  }

  fullName() {
    const isSweet = this.sweetness > 50;
    return `${isSweet ? "Sweet" : ""}${this.color} ${this.name}`;
  }

  eat(): void {
    console.log(`Yum. ${this.name}s are tasty.`);
  }
}

console.log(typeof Fruit); // function
const apple = new Fruit("Apple", 80, "red");

console.log(apple); // object
console.log(typeof apple); // object
console.log(apple instanceof Fruit); // true

const fruitBasket: Fruit[] = [];
fruitBasket.push(apple);

class Vegetable {
  static cookingTimeSeconds = 5;
  static cook(vegetable: Vegetable) {
    setTimeout(() => {
      console.log(`Cooked ${vegetable.name}`);
    }, Vegetable.cookingTimeSeconds * 1000);
  }
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const squash = new Vegetable("squash");
console.log(Vegetable.cook(squash));

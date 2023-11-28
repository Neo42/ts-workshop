// use if or switch statement to check for types at runtime

function sayNameAloud(name: unknown) {
  if (typeof name !== "string") return;
  if (name === "John") console.log(name);
  if (typeof name === "string") console.log(name);
}

function calculateScore(score: number | string) {
  switch (typeof score) {
    case "string":
      return parseInt(score) + 10;
    case "number":
      return score + 10;
    default:
      throw new Error("Invalid type for score");
  }
}

function combineList(list: unknown): any {
  if (Array.isArray(list)) {
    const filteredList: number[] = list.filter((item) => {
      if (typeof item != "number") return false;
      return true;
    });

    const mappedList: number[] = list.map((item) => {
      const numberValue = parseFloat(item);
      if (isNaN(numberValue)) return 0;
      return numberValue;
    });

    const loopedList: number[] = [];
    for (const item of list) {
      if (typeof item === "number") {
        loopedList.push(item);
      }
    }
  }
}

class Fruit {
  constructor(public name: string) {}
  eat() {
    console.log(`Mmm. ${this.name}s.`);
  }
}

function eatFruit(fruit: unknown) {
  if (fruit instanceof Fruit) {
    fruit.eat();
  }
}

interface Person {
  name: string;
  age: number;
}

function sayNameLoud(person: object | Person) {
  // unsafe if only checking for some properties, not all
  if ("name" in person && "age" in person) {
    console.log(`Hey. ${person.name.toUpperCase()}`);
  }
}

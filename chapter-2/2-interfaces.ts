// const car: { wheels: number; color: string } = { wheels: 4, color: "white" };
// const motorcycle: { wheels: number; color: string } = {
//   wheels: 2,
//   color: "black",
// };

interface Vehicle {
  wheels: number;
  color: string;
}

const car: Vehicle = { wheels: 4, color: "white" };
const motorcycle: Vehicle = { wheels: 2, color: "black" };

interface Nutrient {
  name: string;
  value: number;
}

interface EdibleThing {
  name: string;
  color: string;
  calories: number;
  nutrients: Nutrient[];
}

interface Fruit extends EdibleThing {
  sweetness?: number; // optional property
  [nutrient: string | number]: string | number | Nutrient[] | undefined; // index type
}

interface Vegetable {
  name: string;
  color: string;
  calories: number;
  nutrients: Nutrient[];
}

let apple: Fruit;
let squash: Vegetable;

apple = {
  name: "Apple",
  color: "red",
  calories: 9000,
  nutrients: [],
  sweetness: 30,
};

// no error due to index type
apple.vitaminA = "50mg";
apple[1] = "50mg";

let fruitBasket: Fruit[] = [];

// structural typing
const tomato = {
  name: "Tomato",
  color: "red",
  calories: 10,
  nutrients: [],
  sweetness: 20,
};

let anotherVege: Vegetable;
anotherVege = tomato;

fruitBasket.push(tomato);

fruitBasket.push({
  name: "Tomato",
  color: "red",
  calories: 10,
  nutrients: [],
});

const sumSweetness = fruitBasket.reduce((accumulator, fruit: Fruit) => {
  if (!fruit.sweetness) return accumulator;
  return accumulator + fruit.sweetness; // fruit.sweetness is possibly undefined
}, 0);

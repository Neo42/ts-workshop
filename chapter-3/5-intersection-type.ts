interface Fruit {
  name: string;
  sweetness: number;
}

interface Candy {
  name: string;
  sweetness: string;
}

interface Vegetable {
  name: string;
  hasSeeds: boolean;
}

type EdibleThing = Fruit & Vegetable;
type EdibleThing2 = Fruit & Candy;

const something: EdibleThing2 = { sweetness: 1 }; // sweetness is of never type

let banana: EdibleThing = {
  name: "Banana",
  sweetness: 70,
  hasSeeds: false,
};

type StrNum = string & number; // never
type NumNumArray = number & number[]; // allowed but unusable

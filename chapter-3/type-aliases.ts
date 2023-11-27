type Coordinate3D = [number, number, number];
let position: Coordinate3D = [27, 31, 5];

function calculateDistance3D(
  point1: Coordinate3D,
  point2: Coordinate3D,
): number {
  // TODO - Use distance formula
}

type FruitList = string[];
interface IndexedFruitList {
  [index: number]: string;
}

const fruit: FruitList = ["Apple", "Orange"];
const indexedFruitList: IndexedFruitList = fruit;

type StringTree = {
  value: string;
  left?: StringTree;
  right?: StringTree;
};

let myStringTree: StringTree = {
  value: "Trunk",
  left: {
    value: "Apple",
    right: {
      value: "Orange",
    },
    // left: "Pear", // type error
  },
  right: {
    value: "Pear",
  },
};

interface Fruit {
  name: string;
  color: string;
  sweetness: number;
}

type FruitType = Fruit;

type EatFruitCallback = (fruit: Fruit) => void;

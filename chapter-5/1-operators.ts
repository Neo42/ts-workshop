const theAnswer: number = 15 + 27;

type NumberOrString = number | string;

interface Fruit {
  name: string;
  color: string;
  nutrition: { name: string; amount: number }[];
}

interface Thing {
  [index: number]: number;
  [key: string]: number;
}

type FruitNutritionList = Fruit["nutrition"];
type FruitNutrition1 = Thing[string];
type FruitNutrition2 = [number, string][0];

let rectangle = { width: 100, height: 200 };
let rectangle2: typeof rectangle;

interface Rectangle {
  width: number;
  height: number;
}

let propertyName: keyof Rectangle = "height"; // "width" | "height"
let propertyName2: keyof typeof rectangle = "height"; // "width" | "height"

let rectangle3 = { width: 1 as const, height: 2 };
rectangle3.width = 2; // type error

enum Seasons {
  winter,
  spring,
  summer,
  autumn,
}

const SEASONS = {
  winter: "winter",
  spring: "spring",
  summer: "summer",
  autumn: "autumn",
} as const;

function seasonsGreetings(season: (typeof SEASONS)[keyof typeof SEASONS]) {
  if (season === SEASONS.winter) return "⛄️";
  if (season === SEASONS.spring) return "🐰";
  if (season === SEASONS.summer) return "🏖️";
  if (season === SEASONS.autumn) return "🍂";
}

const assortedItems = ["hello", 5, (fruit: Fruit) => {}] as const;
assortedItems[0] = ""; // type error

// only infer element types, not literal, if declared with `let`
let message = "hello";
let count = 5;
const assortedItems2 = [message, count, (fruit: Fruit) => {}] as const;

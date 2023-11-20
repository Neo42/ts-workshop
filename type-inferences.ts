let fileName = "Banana";

fileName = 25; // type error

let numberOfFruit = 25;
let isAppleSeason = true;

let fruit = {
  name: "Banana",
  color: "yellow",
  sweetness: 90,
  isRipe: true,
};

let bananaName = fruit.name;
let { sweetness } = fruit;

let fruitNames = ["Apple", "Banana"];

// inferred automatically
const alternatedFruitNames1 = fruitNames.map((name, index) => {
  if (index % 2 == 0) {
    return name.toUpperCase();
  }
  return name;
});

const nameLength = fruitNames.map((name) => name.length);

// Need explicit type annotation
function alternateUppercase(name: string, index: number) {
  if (index % 2 == 0) {
    return name.toUpperCase();
  }
  return name;
}

const alternatedFruitNames2 = fruitNames.map(alternateUppercase);

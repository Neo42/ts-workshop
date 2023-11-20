let fruitNames = ["Apple", "Banana"];

function alternateUppercase(name: string, index: number) {
  if (index % 2 === 0) {
    return name.toUpperCase();
  }
  return name;
}

const alternatedNames = fruitNames.map(alternateUppercase);

function headsOrTails(): boolean {
  return Math.random() > 0.5;
}

async function getFruitList() {
  const response = await fetch("http://example.com/fruit");
  const fruitList: string[] = await response.json();
  return fruitList;
}

function mapNumbersToNumbers(
  list: number[],
  callback: (item: number) => number,
) {
  return list.map(callback);
}

const doubledNumbers = mapNumbersToNumbers([1, 2, 3], (num) => num * 2);

function logOutput(message: string, yell?: boolean): any;
function logOutput(message: string, yell = true) {
  if (yell) {
    console.log(message.toUpperCase());
  }
  console.log(message);
}

logOutput("Hey! Listen!");

function logManyOutput(...messages: string[]) {
  messages.forEach((message) => logOutput(message));
}

logManyOutput("Hey!", "Listen!");

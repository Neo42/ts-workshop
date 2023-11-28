/* eslint-disable @typescript-eslint/no-unused-vars */
// Without changing the input or return types of the functions, fix all of the TypeScript errors with type narrowing
// If the input is an invalid type, feel free to throw an error in your function.
function doubleIfNumber(input: unknown) {
  if (typeof input !== "number") return;
  return input * 2;
}

function combineValues(input1: unknown, input2: unknown): string | number {
  if (
    typeof input1 !== "number" ||
    typeof input1 !== "string" ||
    typeof input2 !== "number" ||
    typeof input2 !== "string"
  )
    throw new Error("Invalid input.");
  return input1 + input2;
}

function appendToArray(list: unknown, input: unknown): string[] {
  if (!Array.isArray(list) || typeof input !== "string") return [];
  const filteredList: string[] = list.filter(
    (item) => typeof item === "string",
  );
  return filteredList.concat(input);
}

function sumArray(list: unknown) {
  if (!Array.isArray(list)) return;

  const numberList: number[] = list.map((item) => {
    const numberItem = parseFloat(item);
    if (isNaN(numberItem)) return 0;
    return numberItem;
  });

  return numberList.reduce((accumulator: number, item: number) => {
    return accumulator + item;
  }, 0);
}

// The type of "sum" should not be "any"
const sum = sumArray([1, 2, 3]);

interface Fruit {
  name: string;
  color?: string;
  eat?: () => void;
}
function shoutFruitName(fruit: object | Fruit) {
  if ("name" in fruit) {
    console.log(fruit.name.toUpperCase());
  }
}

function shoutFruitColor(fruit: Fruit) {
  console.log(fruit?.color?.toUpperCase());
}

function eatFruit(fruit: Fruit) {
  fruit.eat?.();
}

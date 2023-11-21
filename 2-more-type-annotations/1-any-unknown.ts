// avoid using 'any' unless necessary
async function getFruitList() {
  const response = await fetch("http://example.com/fruit");
  const fruitList: string[] = await response.json();
}

// use unknown with type narrowing (runtime type check with typeof)
const unknownString: unknown = "What am I?";
if (typeof unknownString === "string") {
  console.log(unknownString.toUpperCase());
  let stringValue: string = unknownString;
}

// can't use unknown as a string without narrowing it to string type
console.log(unknownString.toUpperCase());
let stringValue: string = unknownString;

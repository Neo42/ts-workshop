function stringOrArrayLength(input: string | unknown[]) {
  return input.length;
}

function stringOrArrayLength2(input: string): number;
function stringOrArrayLength2(input: unknown[]): number;
function stringOrArrayLength2(input: any) {
  return input.length;
}

console.log(stringOrArrayLength("Hey there"));
console.log(stringOrArrayLength([1, 2, 3]));
console.log(stringOrArrayLength({ length: 50 })); // type error

interface IceCreamSundae {
  baseIceCream: string;
  chocolateSyrup: number;
  cherry: boolean;
}

const hotFudgeSundae = {
  baseIceCream: "vanilla",
  chocolateSyrup: 5,
  cherry: true,
  // add type annotation for `this` for specificity, python-like syntax
  eat(this: IceCreamSundae) {
    if (this.cherry) {
      console.log("Mmm. Tasty.");
    } else {
      console.log("Could be better.");
    }
  },
};

hotFudgeSundae.eat();

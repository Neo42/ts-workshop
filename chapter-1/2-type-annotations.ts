function getFruitBasketVerbalCount(fruitList: string[]) {
  let verbalFruitCount: string;
  if (fruitList.length > 5) {
    verbalFruitCount = "A lot of fruit.";
  } else {
    verbalFruitCount = "Some fruit.";
  }
  return verbalFruitCount;
}

// disable warning for use before initialization
let favoriteDesert!: string;
favoriteDesert = "Cookies";

let ingredients: string[];

let menu: {
  courses: number;
  veganOption: boolean;
  drinkChoices: string[];
} = {
  courses: 5,
  veganOption: true,
  drinkChoices: ["Sprite", "Coke", "Water"],
};

const { courses } = menu;

const nullValue: null = null;

async function getFruitList() {
  const response = await fetch("http://example.com/fruitList");
  const fruitList = await response.json();
  const typeFruitList: string[] = fruitList;
  return typeFruitList;
}

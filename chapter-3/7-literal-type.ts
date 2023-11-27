// "Apple" as a literal type excluding all other values
let fruitName: "Apple" = "Apple";
fruitName = "Banana"; // type error

const fruitName2 = "Orange"; // constant has literal types implied

type Seasons = "spring" | "summer" | "autumn" | "winter";

function seasonGreetings(season: Seasons) {
  if (season === "winter") return "⛄️";
  if (season === "spring") return "🐰";
  if (season === "summer") return "🏖️";
  if (season === "autumn") return "🍂";
}

seasonGreetings("fall"); // type error

type BasketballRetiredJerseys = 1 | 12;
type isFan = true;

interface Fruit {
  foodType: "fruit";
  name: string;
  sweetness: number;
}

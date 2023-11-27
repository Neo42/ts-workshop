type CoordinateTuple = [number, number];

interface CoordinateInterface {
  x: number;
  y: number;
}

type Coordinate = CoordinateInterface | CoordinateTuple;

function measureDistance(point1: Coordinate, point2: Coordinate): number {
  const { x: x1, y: y1 } = extractXY(point1);
  const { x: x2, y: y2 } = extractXY(point2);
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function extractXY(point: Coordinate) {
  if (Array.isArray(point)) {
    return { x: point[0], y: point[1] };
  } else {
    return point;
  }
}

const distance1 = measureDistance([1, 2], { x: 1, y: 3 }); // 1
const distance2 = measureDistance({ x: 1, y: 1 }, { x: 1, y: 3 }); // 2

interface Fruit {
  name: string;
  sweetness: number;
}

interface Vegetable {
  name: string;
  hasSeeds: boolean;
}

type EdibleThing = Fruit | Vegetable;

function checkForSeeds(food: EdibleThing) {
  if ("hasSeeds" in food) {
    console.log(food.hasSeeds);
  }
}

interface Fruit2 {
  name: string;
  sweetness?: number;
}

function getSweetness(fruit: Fruit2): number {
  const sweetness = fruit.sweetness;
  if (!sweetness) throw new Error("sweetness doesn't exist");
  return sweetness;
}

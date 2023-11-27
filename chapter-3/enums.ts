// Magic values
// function seasonGreetings(season: string) {
//   if (season === "winter") return "⛄️";
//   if (season === "spring") return "🐰";
//   if (season === "summer") return "🏖️";
//   if (season === "autumn") return "🍂";
// }

// named as object property to avoid typo
// const SEASONS = {
//   winter: "winter",
//   spring: "spring",
//   summer: "summer",
//   autumn: "autumn",
// };

// function seasonGreetings(season: string) {
//   if (season === SEASONS.winter) return "⛄️";
//   if (season === SEASONS.spring) return "🐰";
//   if (season === SEASONS.summer) return "🏖️";
//   if (season === SEASONS.autumn) return "🍂";
// }

// Enums for complete type safety
enum Seasons {
  winter,
  spring,
  summer,
  autumn,
}

// if not assigned before, enum properties afterhand can be assigned with numbers, not strings
let winter = Seasons.winter;
winter = 1;

enum Seasons2 {
  winter = 12,
  spring,
  summer,
  autumn,
}

function seasonGreetings(season: Seasons) {
  if (season === Seasons.winter) return "⛄️";
  if (season === Seasons.spring) return "🐰";
  if (season === Seasons.summer) return "🏖️";
  if (season === Seasons.autumn) return "🍂";
}

console.log(Seasons2.winter); // 12
console.log(Seasons2.autumn); // 15

// can be assigned numbers, don't need number assignment for all properties
enum Seasons3 {
  winter = 12,
  spring = 75,
  summer = 100,
  autumn = 130,
}

// can be assigned strings, but for all properties once assigned with strings
enum Seasons4 {
  winter = "snowy",
  spring = "rainy",
  summer = "sunny",
  autumn = "windy",
}

enum PromiseStates {
  pending,
  fulfilled,
  rejected,
}

const FakePromise = {
  state: PromiseStates.pending,
  resolve: function () {
    this.state = PromiseStates.fulfilled;
  },
  reject: function () {
    this.state = PromiseStates.rejected;
  },
};

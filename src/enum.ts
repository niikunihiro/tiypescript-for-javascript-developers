export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  Septenber,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = "#FF0000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  // YELLOW = "#FFFF00",
  BLACK = "#000000",
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = "#FFFF00",
  GRAY = "#808080",
}

let yellow = COLORS.YELLOW;
let gray = COLORS.GREEN;
console.log({ yellow, gray, green });

export {};

// シグネチャー宣言
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  // number と string 以外が渡されたらシグネチャ宣言の方でエラーとなる
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double("Go "));
// console.log(double(true));

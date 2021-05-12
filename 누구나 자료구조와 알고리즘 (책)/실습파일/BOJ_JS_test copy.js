// Ctrl + Ait + N --- 입출력 작동

const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5
24 10 6 30 9
20 56 6 31 7
40 17 6 30 1
10 10 6 3 7
`
)
  .trim()
  .split("\n");

let count = Number(input[0]);
let inputLine = input[1].split(" ").map((str) => Number(str));

// let numberStr = input[1].split(" ");
// let numbers = numberStr.map((cur) => Number(cur));

console.log(count);
console.log(inputLine);

// console.log(numberStr);
// console.log(numbers);

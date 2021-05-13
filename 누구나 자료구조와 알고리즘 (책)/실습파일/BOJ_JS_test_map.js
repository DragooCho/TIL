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

let inputLine = input.map((num) =>
  num.split(" ").map((array) => Number(array))
);
let count = inputLine[0][0];
let answer = "";

answer = inputLine.map((arr) => arr[0]);

console.log(typeof count);
console.log(inputLine);

console.log(answer);

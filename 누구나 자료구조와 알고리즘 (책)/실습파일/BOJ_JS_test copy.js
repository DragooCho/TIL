const fs = require("fs");
const [...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `11
10987654321
`
)
  .trim()
  .split("\n");

// let sum = 0;

// for (let num of arr[1]) {
//   sum += Number(num);
// }

let newArr = Array.from(arr[1]);

let sum = newArr.map((n) => +n).reduce((a, b) => a + b);
console.log(sum);

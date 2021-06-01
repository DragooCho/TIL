const fs = require("fs");
const input = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `9`
)
  .trim()
  .split("\n");

let N = Number(input);
let answer = 0;
let remainder = 0;

if (N % 5 === 0) {
  answer = N / 5;
} else if (N === 3) {
  answer = 1;
} else if (N === 4) {
  answer = -1;
} else {
  remainder = N % 5;
  if (remainder % 3 === 0) {
    answer = Math.floor(N / 5) + 1;
  } else if (N % 3 === 0) {
    answer = N / 3;
  } else {
    answer = -1;
  }
}

console.log(answer);

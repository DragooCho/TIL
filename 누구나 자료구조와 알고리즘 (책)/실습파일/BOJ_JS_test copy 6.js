const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `100`
).trim();

let N = Number(input);

let i = 1;
let sum = 1;
while (sum < N) {
  sum += 6 * i;
  i++;
}

console.log(i);

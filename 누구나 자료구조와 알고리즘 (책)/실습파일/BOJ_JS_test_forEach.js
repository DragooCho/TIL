const fs = require("fs");
const [n] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000
`
)
  .trim()
  .split("\n");

let N = Number(n);
let count = 0;

for (let i = 1; i <= N; i++) {
  let iArr = String(i);
  if (i <= 99) {
    count++;
    continue;
  }

  let A = Number(iArr[0]) - Number(iArr[1]);
  let B = Number(iArr[1]) - Number(iArr[2]);
  if (A === B) {
    count++;
  }
}

console.log(count);

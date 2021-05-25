const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `ljnj`
).trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("Q");
  }

  return input;
}

console.log(solution(input));

// console.log(croatia[1]);

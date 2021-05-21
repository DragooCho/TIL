const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `aaaajjjdddd`
).trim();

let alphCountArr = [];
let maxCount = 0;
let answer;
let words = input.toUpperCase().split("");

let a = "A".charCodeAt();
let z = "Z".charCodeAt();

for (let i = a; i <= z; i++) {
  let count = 0;
  let alph = String.fromCharCode(i);
  let position = words.indexOf(alph);
  while (position !== -1) {
    count++;
    position = words.indexOf(alph, position + 1);
    if (count >= maxCount) {
      maxCount = count;
      answer = String.fromCharCode(i);
    }
  }
  alphCountArr.push(count);
}

let newArr = alphCountArr.sort((a, b) => b - a);
let lastPos = newArr[0];
let laftPos = newArr[1];
if (lastPos === laftPos) {
  answer = "?";
}

console.log(answer);

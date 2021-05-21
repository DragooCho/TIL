const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `aaaaaaaaaaaaaaaaaajjjdddddddddddddddddddddddddddddddddddddddddZ`
).trim();

let alphCountArr = [];
let maxCount = 0;
let answer;
let words = input.toUpperCase().split("");
let overlapCount = 0;

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

let countArr = alphCountArr.indexOf(maxCount);
while (countArr !== -1) {
  overlapCount++;
  countArr = alphCountArr.indexOf(maxCount, countArr + 1);
  if (overlapCount >= 2) {
    answer = "?";
  }
}

console.log(answer);

// openAlphWord();
// alphCountArr.push(count);
// `aaaajjjdddd`에서 오류 발견

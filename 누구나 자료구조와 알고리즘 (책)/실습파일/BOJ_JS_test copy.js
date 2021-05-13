const fs = require("fs");
const [...arr] = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `150
266
427
`
)
  .trim()
  .split("\n");

let arrLines = arr.map((element) => Number(element));

let strNumbers = String(arrLines[0] * arrLines[1] * arrLines[2]);
let answer = "";

for (let i = 0; i <= 9; i++) {
  let numArr = "";
  for (let j = 0; j < strNumbers.length; j++) {
    let strNum = Number(strNumbers[j]);
    if (i === strNum) {
      numArr += i;
    }
  }

  answer += numArr.length + "\n";
}

console.log(answer);

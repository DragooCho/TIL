const fs = require("fs");
const arr = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
3 ABC
5 /HTP
`
)
  .trim()
  .split("\n");

let testCount = Number(arr[0]);
let answer = "";

for (let i = 1; i <= testCount; i++) {
  let nArr = arr[i];
  let arrCount = Number(nArr[0]);
  for (let j = 2; j < nArr.length; j++) {
    let nString = nArr[j];
    answer += nString.toString().repeat(arrCount);
  }

  answer += "\n";
}

console.log(answer);

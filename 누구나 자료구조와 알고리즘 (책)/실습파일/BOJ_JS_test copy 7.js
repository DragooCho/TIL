const fs = require("fs");
const [n, ...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
15 12 29
30 50 72
`
)
  .trim()
  .split("\n");

let nArrNumber = Number(n);
let newArr = arr.map((e) => e.split(" "));
let nAnswer;

for (let i = 0; i < nArrNumber; i++) {
  let H = newArr[i][0],
    // W = newArr[i][1],
    N = newArr[i][2];

  let answerW = Math.ceil(N / H);
  answerW < 10 ? (answerW = String(0) + answerW) : answerW;

  let answerH = Number(N % H);

  if (answerH === 0) {
    answerH = H;
  }

  nAnswer += `${answerH}` + `${answerW}` + "\n";
}

console.log(nAnswer);

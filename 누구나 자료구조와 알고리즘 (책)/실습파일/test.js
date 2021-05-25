const fs = require("fs");
const [...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000 70 70`
)
  .trim()
  .split(" ");

let A = Number(arr[0]);
let B = Number(arr[1]);
let C = Number(arr[2]);

let N = A / (C - B);

let answer = Math.floor(N) + 1;

// B >= C ? (answer = -1) : answer;

console.log(answer);

// let totalCost = A + B;
// let totalIncome = C;

// if (totalIncome > totalCost) {
//   N = 1;
// }

// while (totalCost >= totalIncome) {
//   N++;
//   if (B >= C) {
//     N = -1;
//     break;
//   }
//   totalCost = A + B * N;
//   totalIncome = C * N;
// }

// console.log(N);

// 처음부터 변수명으로 지으면서 코드를 짤려고 하니 햇갈리기도 하다 영어단어가 익숫치 않아서일지도 모른다. 처음에는 그냥 간단한 변수로 짜고 나중에 바꾸는게 개인적으로 더 좋을 듯

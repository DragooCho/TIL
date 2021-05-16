// const fs = require("fs");
// const [n, ...arr] = (process.platform === "linux"
//   ? fs.readFileSync("/dev/stdin").toString()
//   : `150
// 266 356
// 427 35 56 2
// 24 55 67 98
// `
// )
//   .trim()
//   .split("\n");

// let count = Number(n);
// let inputLines = [];
// let arrLines = arr.map((element) => element.split(" "));

// arrLines.forEach((arrLines) => {
//   inputLines.push(arrLines.map((e) => Number(e)));
// });

// console.log(count);
// console.log(inputLines);

// let A = [1, 2, 3, 4, 5];
// let B = [3, 4];

// A.splice(B, 1);
// console.log(A);

// C, C11, C (Clang), C11 (Clang): long long sum(int *a, int n);
// a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
// n: 합을 구해야 하는 정수의 개수
// 리턴값: a에 포함되어 있는 정수 n개의 합

let n = 4;
let a = [3, 8, 2, 6];
let b = [3, 1, 2, 8];

function solve(event) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += event[i];
  }
  return console.log(ans);
}

solve(b);

// def solve(a):
//     ans = 0
//     for i in a:
//         ans = ans + i
//     return ans

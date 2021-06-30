// const fs = require("fs");
// const input = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `734 893`
// )
//   .trim()
//   .split(" ");

// let A = input[0].split("");
// let B = input[1].split("");

// let sumA = Number(A.reverse().join(""));
// let sumB = Number(B.reverse().join(""));

// console.log(Math.max(sumA, sumB));

// let sumA = Number(A.reverse().reduce((a, b) => a + b));
// let sumB = Number(B.reverse().reduce((a, b) => a + b));

// let aTmp = A[0];
// A[0] = A[2];
// A[2] = aTmp;

// let bTmp = B[0];
// B[0] = B[2];
// B[2] = bTmp;

// let sumA = Number(A[0] + A[1] + A[2]);
// let sumB = Number(B[0] + B[1] + B[2]);

// if (sumA < sumB) {
//   console.log(sumB);
// } else if (sumA > sumB) {
//   console.log(sumA);
// }

var Xmas95 = new Date();
var weekday = Xmas95.getFullYear();

console.log(weekday);

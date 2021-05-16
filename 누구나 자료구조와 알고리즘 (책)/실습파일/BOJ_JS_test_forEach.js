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

let arr = [];
let answer = [];
const start = () => {
  for (let i = 1; i <= 10000; i++) {
    let N = 0;
    let stringNumber = String(i);
    for (let j = 0; j < stringNumber.length; j++) {
      N += Number(stringNumber[j]);
    }
    let nNum = i + N;
    arr.push(nNum);
  }

  for (let i = 1; i <= 10000; i++) {
    if (arr.indexOf(i) === -1) {
      answer += i + "\n";
    }
  }
  console.log(answer);
};

start();

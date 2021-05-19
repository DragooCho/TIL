// Ctrl + Ait + N --- 입출력 작동

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `122`
).trim();

console.log(String.fromCharCode(input));
// let inputLine = input.map((num) =>
//   num.split(" ").map((array) => Number(array))
// );
// let answer = "";

// let nNumber = input;

// for (let i = 1; i <= nNumber; i++) {
//   let scoreSum = null;
//   let midScore = null;
//   let count = null;
//   for (let j = 1; j <= inputLine[i][0]; j++) {
//     scoreSum += inputLine[i][j];
//   }
//   midScore = scoreSum / inputLine[i][0];

//   for (let z = 1; z <= inputLine[i][0]; z++) {
//     let parMidScore = parseInt(midScore);
//     if (parMidScore < inputLine[i][z]) {
//       count++;
//     }
//   }
//   answer += (100 / (inputLine[i][0] / count)).toFixed(3) + "%" + "\n";
// }

// "문자열".charCodeAt([문자열 자릿수]);
// String.fromCharCode([아스키코드값]);

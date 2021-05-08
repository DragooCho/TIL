// Ctrl + Ait + N --- 입출력 작동

const fs = require("fs");
let stdin =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2`;

let number2 = parseInt(stdin);

for (let i = 1; i <= 9; i++) {
  let multiplyA = number2 * i;
  console.log(`${number2} * ${i} = ${multiplyA}`);
}

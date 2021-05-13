// Ctrl + Ait + N --- 입출력 작동

//1. 하나의 값을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

//2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

//3. 여러 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/)

//5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
// const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
//ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// const n = input[0];
// const n_arr = input.slice(1, n+1);
// const [m, ...m_arr] = input.slice(n+1);

const fs = require("fs");
const [...arr] = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `42
84
252
420
840
126
42
84
420
126
`
)
  .trim()
  .split("\n");

let inputLines = [];
let arrLines = arr.map((element) => element.split(" "));

arrLines.forEach((arrLines) => {
  inputLines.push(arrLines.map((e) => Number(e)));
});

let aArray = [];

for (let i = 0; i < inputLines.length; i++) {
  let LNum = inputLines[i][0] % 42;
  aArray.push(LNum);
}

aArray.sort((a, b) => a - b);

for (let j = 0; j < aArray.length; j++) {
  while (aArray[j] === aArray[j + 1]) {
    aArray.splice(j, 1);
  }
}

console.log(inputLines);

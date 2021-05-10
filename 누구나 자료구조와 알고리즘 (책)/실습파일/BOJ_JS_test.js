// Ctrl + Ait + N --- 입출력 작동

//1. 하나의 값을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

//2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

//3. 여러 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/)<-- 현재는 비권장;;

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
  : `1 1
2 3
3 4
0 0
5 2
0 0
`
)
  .trim()
  .split("\n");

answer = [];
console.log(arr);

answer.push(arr[0].split(" "));

// i = 0;
// while (i <= arr.length - 1) {
//   let A = parseInt(arr[i].split(" ")[0]);
//   let B = parseInt(arr[i].split(" ")[1]);
//   if (A !== 0 || B !== 0) {
//     answer += `${A + B}` + "\n";
//   } else {
//     (" "); // "" or " " 도 정답처리된다.
//   }
//   i++;
// }

console.log(arr);
console.log(answer);

// 삼항연산자 answer += A !== 0 || B !== 0 ? `${A + B}` + "\n" : "";
// 로 대체 가능하지만 break문을 쓰지 못한다.

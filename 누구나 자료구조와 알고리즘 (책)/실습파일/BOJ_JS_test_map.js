const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `734 893`
)
  .trim()
  .split(" ");

let A = input[0].split("");
let B = input[1].split("");

let sumA = Number(A.reverse().join(""));
let sumB = Number(B.reverse().join(""));

console.log(Math.max(sumA, sumB));

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

// 잠깐 sort() 메서드를 쓸까 했는데 아... 숫자를 뒤집는거지 최대.최소수 정렬이 아니라는걸 깨닳았다. 로직 자체는 반복문도 필요없이
// 무조건 3자리 숫자만 나오는 조건이라 양 끝 숫자값만 바꾸고 넘버 타입으로 변환후 간단한 조건문만 붙이면 끝인 무난한 문제였다.
// reverse(), reduce(), Math.max를 활용하면 좀 더 간결하고 가독성있는 코드가 된다. reduce((a, b) => a + b)가 아닌 join('')을 써도 통용된다.

// reverse() --- 배열의 요소 순서를 뒤집는다.
// reduce((a, b) => a + b) --- 배열의 요소들 전부 더한다.
// Math.max --- 배열에서 최대 요소를 찾아 반환한다.

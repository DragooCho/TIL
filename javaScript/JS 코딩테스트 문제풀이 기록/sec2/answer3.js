function solution(A, B) {
  let answer = "";
  for (let i = 0; i < A.length; i++) {
    answer += `${vs(A[i], B[i])}\n`;
  }

  return answer;
}

const vs = (a, b) => {
  let sum = a - b;
  if (sum === -2 || sum === 1) return "A";
  else if (sum === -1 || sum === 2) return "B";
  else return "D";
};

// 경우의 수를 얼마나 적게 잡느냐에 따라 효율성이 달라진다.
// 두 사람의 가위바위보에서 나올 경우의 수는 한사람이 이기거나
// 지거나 비기거나 이 세가지 경우가 전부다.

let arrayA = [2, 3, 3, 1, 3];
let arrayB = [1, 1, 2, 2, 3];

console.log(solution(arrayA, arrayB));

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  // a는 순회할 때마다 자연수를 합친 결과값을 축척하며 b는 인덱스의 요소다.

  endOfCircuit: for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        // i 요소를 먼저 빼면 다음에 빠질 J요소의 인덱스 자리가 달라지기 때문에 엉뚱한 요소를 없앨 위험이 있다.
        // j요소를 먼저 빼면 i요소의 인덱스의 자리가 달라지지 않기 때문에 문제없다
        break endOfCircuit;
        // break문이 없으면 조건이 또 만족할시에 배열길이가 5 이하로 줄어들기에 반드시 필요하다.
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 28, 8, 13];
console.log(solution(arr));

// [ 7, 19, 10, 15, 28, 8, 13]

// function solution(arr) {
//   let answer = arr;
//   let sum = arr.reduce((a, b) => a + b, 0);

//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       if (sum - (answer[i] + answer[j]) === 100) {
//         answer.splice(j, 1);
//         answer.splice(i, 1);
//       }
//     }
//   }
//   return answer;
// }

// let arr = [20, 7, 23, 19, 10, 15, 28, 8, 13];
// console.log(solution(arr));

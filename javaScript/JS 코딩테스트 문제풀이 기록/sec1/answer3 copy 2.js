// function solution(arr) {
//   let answer = Math.min(...arr);

//   return answer;
// }
// let arr = [51, 31, 7, 11, 21, 15, 17];

// console.log(solution(arr));

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  answer = min;

  return answer;
}
let arr = [51, 31, 7, 11, 21, 15, 17];

console.log(solution(arr));

// Number.MAX_SAFE_INTEGER는 JavaScript에서 안전한 최대 정수값을 나타냅니다.
// Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2는 참으로 평가되며 이는 수학적으로 올바르지 않습니다.

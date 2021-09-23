function solution(arr) {
  // let answer = [];
  // for (let i of arr) {
  //   let n = 1;
  //   for (let j of arr) {
  //     if (j > i) {
  //       n++;
  //     }
  //   }

  //   answer.push(n);
  // }

  let n = arr.length;
  answer = Array.from({ length: n }, () => 1);
  // Array.from()으로 배열을 생성한 후
  // 배열의 길이와 각 요소들에게 연산이 가능하다.

  for (let i of arr) {
    for (let j = 0; j < n; j++) {
      if (arr[j] < i) {
        answer[j]++;
      }
    }
  }

  return answer;
}
let arr = [87, 89, 92, 100, 76];

console.log(solution(arr));

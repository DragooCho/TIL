function solution(arr) {
  let answer = 0;
  let n = arr[0].length;
  // (i,j)는 맨토.멘티, arr[y][x]

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // i,j 멘토 멘티의 경우의 수를 차례대로 순회하되
      // 그 안에서 또 다시 배열의 순회를 거친다.

      let testCounters = 0;
      // 배열을 모두 순회하면 임시카운트를 초기화하는 위치

      for (let y = 0; y < arr.length; y++) {
        let mTo,
          mTi = 0;
        // 배열을 순회하는 반복문 안에서 맨토, 멘티를 초기화하는 위치

        for (let x = 1; x <= n; x++) {
          if (arr[y][x] === i) mTo = x;
          if (arr[y][x] === j) mTi = x;
        }
        if (mTo > mTi) testCounters++;
        // 배열 y 내부를 순회하면서 맨토, 멘티값을 만든 후
        // 맨티보다 맨토의 값이 큰 경우에만 임시로 카운트한다.
      }

      if (testCounters === arr.length) answer++;
      // 임시카운트 숫자가 배열의 길이와 같다면 정식카운트에 넣는다.
    }
  }

  return answer;
}

// let arr = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];
let arr = [
  [3, 1, 4, 2],
  [1, 4, 3, 2],
  [1, 2, 4, 3],
];
// let arr = [
//   [1, 2, 3, 4, 5],
//   [5, 4, 3, 2, 1],
// ];

console.log(solution(arr));

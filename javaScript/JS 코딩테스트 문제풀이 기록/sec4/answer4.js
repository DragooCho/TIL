function solution(arr, m) {
  let answer = 0;
  let n = arr.length;

  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  // 가장 싼 가격 순으로 구매('-')해야 되도록 많은 선물을
  // 많이 살수 있기에 sort()로 비교정렬한다.

  for (let i = 0; i < n; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    // 예산에 속하는 m은 순회 때마다 새로 써야 하기에
    // money로 따로 지정하고 연산을 해야한다.

    let count = 1;
    // 순회 첫 작업에 세일을 거친 합산을 했기에 카운트 1로 시작

    for (let y = 0; y < n; y++) {
      if (arr[i][0] !== arr[y][0] && arr[y][0] + arr[y][1] > money) break;
      // money가 다 떨어졌을시 불필요한 순회를 끝내기 위해 break문을 쓴다.

      if (arr[i][0] !== arr[y][0] && arr[y][0] + arr[y][1] <= money) {
        money -= arr[y][0] + arr[y][1];
        count++;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

// 이 문제의 주요해결점은 "예산(m)을 소비"하면서 이중for문의 완전탐색이다.
// 모든배열에 할인의 경우를 적용하는 순회를 거치면서
// 예산을 소모하고 결과값을 Math.max로 비교해 answer로 넘기면
// 시간복잡도 효율을 높히면서 최대값을 구할수있다.

console.log(solution(arr, 28));

function solution(arr) {
  let answer = (sum4 = sum3 = sum1 = sum2 = 0),
    n = arr.length;

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;

    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
      // 행과 열을 동시에 순환할 때 for문안에 for문에서 [i]와 [j]를 서로 바꿘 코드를 쓰는게 무난하다.
    }
    answer = Math.max(sum1, sum2, answer);
    // 다음 최대값 계산을 수월하게 할려면 최대값을 품고있는 answer를 자주 불러 대조해야한다.

    sum3 += arr[i][n - 1 - i];
    sum4 += arr[i][i];
    // 대각선 한번씩 순환하는 코드로서 1층의 for문 안에 삽입!! 외우는게 좋다.
  }

  answer = Math.max(sum3, sum4, answer);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

// 2차원 배열의 흔한 구조
// 일단 이 문제에서 시간복잡도는 O(n2)이 최선의 수식이다.

console.log(solution(arr));

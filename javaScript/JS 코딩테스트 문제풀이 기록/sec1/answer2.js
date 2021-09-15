function solution(a, b, c) {
  let arr = [a, b, c],
    MAX = Math.max(...arr),
    answer = "YES",
    sum = arr.reduce((a, b) => a + b); // 배열끼리 더하는 방법 1 새 변수로 할당해야한다.
  // arr.forEach((e) => (sum += e)); // 배열끼리 더하는 방법 2

  if (MAX >= sum - MAX) answer = "NO";

  return answer;
}

console.log(solution(13, 20, 17));

// 크거나 같다고 해야 해결된다.

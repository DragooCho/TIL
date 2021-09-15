function solution(N) {
  const arr = Array.from({ length: N + 1 }, (v, i) => i);

  // const answer = arr.reduce((acc, cur, index, array) => {
  //   return acc + cur;
  // }, 0);

  //////////////
  let answer = 0;
  arr.forEach((e) => (answer += e));
  //////////////
  return answer;
}

console.log(solution(5));

// 단순 배열요소들끼리 합산한 결과를 원하는거면 forEach()가 더 간단하다.

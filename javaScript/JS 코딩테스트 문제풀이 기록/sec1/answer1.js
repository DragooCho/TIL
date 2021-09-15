function solution(a, b, c) {
  let Q = [a, b, c];
  let answer = Math.min(...Q);

  return answer;
}

console.log(solution(20, 235, 100));
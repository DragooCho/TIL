function solution(s, r) {
  // let answer = 0;
  // for (let i of s) {
  //   if (i == r) answer++;
  // }
  // return answer;
  let answer = s.split(r).length - 1;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
let findAfa = "R";
console.log(solution(str, findAfa));

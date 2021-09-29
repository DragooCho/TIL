function solution(str) {
  // let answer = "";

  // for (let e of str) {
  //   if (!isNaN(e)) answer += e;
  // }

  // return parseInt(answer, 10);

  let answer = "";

  for (let e of str) {
    if (0 <= e && e < 10) answer += e;
    // isNaN()은 숫자 NaN의 참거짓을 반환하는 함수이다.
    // 이런 함수를 쓰는게 아니면 보통의 숫자 범위를 파악하는 조건문도 된다.
  }

  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";

console.log(solution(str));

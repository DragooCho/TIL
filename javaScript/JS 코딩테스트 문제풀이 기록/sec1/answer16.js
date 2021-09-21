function solution(s) {
  let answer = "";

  for (let i of s) {
    // if (answer.indexOf(i) === -1) {
    //   answer = answer.concat(i);
    //   // answer += i;
    // }
    if (!answer.includes(i)) {
      answer += i;
    }
  }

  // 문자열에 문자타입을 더할때는 'concat('추가할문자')' 또는 '추가연산자'를 쓴다.
  // includes()는 불리언(boolean) 속성을 반환하고
  // indexOf()는 처음으로 등장하는 위치의 인덱스(숫자타입)를 반환

  return answer;
}

let str = "ksekkset";
console.log(solution(str));

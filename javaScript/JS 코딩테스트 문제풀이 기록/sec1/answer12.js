function solution(s) {
  let answer = "";

  // let answer = s.toUpperCase(); 가장 간단한 정답

  // for (let i of s) {
  //   answer += i.toUpperCase();
  // }

  for (let i of s) {
    let num = i.charCodeAt();
    num >= 97 && num <= 122 ? (answer += i.toUpperCase()) : (answer += i);
  }

  // charCodeAt()는 요소를 아스키코드로 바꿔주며
  // 아스키코드의 대문자는 65~90까지 소문자는 97~ 122까지 있다.

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

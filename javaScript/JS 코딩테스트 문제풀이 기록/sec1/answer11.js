function solution(s) {
  let answer = 0;

  for (let i of s) {
    let num = i.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  // charCodeAt()는 요소를 아스키코드로 바꿔주며
  // 아스키코드의 대문자는 65~90까지 소문자는 97~ 122까지 있다.

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

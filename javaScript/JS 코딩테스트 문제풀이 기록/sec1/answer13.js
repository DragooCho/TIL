function solution(s) {
  let answer = "";

  for (let i of s) {
    // let num = i.charCodeAt();
    // num >= 65 && num <= 90
    //   ? (answer += i.toLowerCase())
    //   : (answer += i.toUpperCase());

    let UpperNum = i.toUpperCase();
    i === UpperNum ? (answer += i.toLowerCase()) : (answer += UpperNum);

    // if (num >= 65 && num <= 90) answer += i.toLowerCase();
    // if (num >= 97 && num <= 122) answer += i.toUpperCase();
  }

  // charCodeAt()는 요소를 아스키코드로 바꿔주며
  // 아스키코드의 대문자는 65~90까지 소문자는 97~ 122까지 있다. +32

  return answer;
}

let str = "StuDY";
console.log(solution(str));

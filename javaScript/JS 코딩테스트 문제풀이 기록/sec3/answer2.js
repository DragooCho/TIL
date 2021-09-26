function solution(str) {
  let answer = "YES";
  // let n = str.length;

  // str = str.toLowerCase().split("");
  // // 알파벳이 아닌 원소를 바꾸기 위해 소문자로 바꾸고 배열로 분해

  // for (let i = 0; i < Math.floor(n / 2); i++) {
  //   let pattern = /^[a-z]+$/;
  //   if (
  //     pattern.test(str[i]) === false &&
  //     pattern.test(str[n - 1 - i]) === false
  //     // 정규표현식을 이용하면 test()를 간결하게 이용할 수있다.
  //   ) {
  //     str[i] = "#";
  //     str[n - 1 - i] = "#";
  //   }
  //   // 순환비교되는 원소 2개가 모두 알파벳이 아니면 특수문자로 바꿔야
  //   // 다음 if문에서 원소들을 비교할때의 작업이 단순해진다.

  //   if (str[i] !== str[n - 1 - i]) return "NO";
  //   // 순환비교하는 원소 2개 중 하나만 알파벳이 아니라도
  //   // 팰린드롬의 조건에 맞지 않으므로 "NO"로 리턴해준다.
  // }

  str = str.toLowerCase().replace(/[^a-z]/g, "");

  if (str.split("").reverse().join("") !== str) return "no";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7DnuoF";

console.log(solution(str));

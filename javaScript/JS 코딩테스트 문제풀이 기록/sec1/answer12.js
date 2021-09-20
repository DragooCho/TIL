function solution(s) {
  let answer = "";
  for (let i of s) {
    answer += i.toUpperCase();
  }
  // for (let i of s) {
  //   let num = i.charCodeAt();
  //   if (num >= 65 && num <= 90) answer++;
  // }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

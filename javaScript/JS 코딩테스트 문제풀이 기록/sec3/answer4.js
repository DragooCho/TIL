function solution(str, s) {
  let answer = [];
  let leng = 100;

  for (let i of str) {
    if (i === s) {
      leng = 0;
      answer.push(leng);
    } else {
      leng++;
      answer.push(leng);
    }
  }

  leng = 100;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === s) {
      leng = 0;
      answer[i] = leng;
    } else {
      leng++;
      answer[i] = Math.min(answer[i], leng);
    }
  }

  // let numberS = [];

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === s) numberS.push(str.indexOf(s, i));
  // }

  // for (let i = 0; i < str.length; i++) {
  //   let min = str.length;

  //   for (let j of numberS) {
  //     let n = Math.abs(i - j);
  //     if (n < min) min = n;
  //   }

  //   answer += min + " ";
  // }

  return answer;
}

let str = "teachermodefhgfj";

console.log(solution(str, "e"));

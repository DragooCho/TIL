function solution(s) {
  // let newArr = [];
  // let answer = "";
  // for (let i of arr) {
  //   if (i === "A") {
  //     newArr.push("#");
  //   } else {
  //     newArr.push(i);
  //   }
  // }

  // answer = newArr.reduce((a, b) => a + b);

  ///////////////////////

  let answer = "";

  // for (let i of s) {
  //   if (i === "A") {
  //     answer += "#";
  //   } else {
  //     answer += i;
  //   }
  // }
  // forEach문은 배열에 적용 가능하지만 문자열에서는 쓸 수없다.

  //////////////////////////////////////////////////////////////

  answer = s.replace("A", "#");

  return answer;
}

let str = "BANANA";
console.log(solution(str));

function solution(arr) {
  let answer = [];

  // for (let i of arr) {
  //   if (!answer.includes(i)) {
  //     answer += `${i}\n`;
  //   }
  // }
  answer = arr.filter((v, i) => {
    return arr.indexOf(v) === i;
  });

  // includes()는 불리언(boolean) 속성을 반환하고
  // indexOf()는 처음으로 등장하는 위치의 인덱스(숫자타입)를 반환

  return answer;
}

let array = ["good", "time", "good", "time", "student"];
// array를 문자를 넣을떼 "" 를 잊지말자.
console.log(solution(array));

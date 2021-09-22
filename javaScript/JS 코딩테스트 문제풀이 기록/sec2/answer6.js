function solution(arr) {
  let [minNum, sumNum, oddNumArr] = [0, 0, []];

  for (let e of arr) {
    if (e % 2 === 1) {
      oddNumArr.push(e);
    }
  }

  minNum = Math.min(...oddNumArr);
  oddNumArr.map((e) => (sumNum += e));

  // answer = sumNum + "\n" + minNum;
  answer = `${sumNum}\n${minNum}`;
  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// ES6 for of 반복문 "for (let e of arr) {}" 과
// 디스트럭쳐링 할당 "let [minNum, sumNum, oddNumArr] = [0, 0, []]" 과
// Spread Operator 할당 (...oddNumArr) 과
// 템플릿 리터럴 `${sumNum}\n${minNum}`를 활용하면
// 코드가 간단하고 읽기 좋아진다.

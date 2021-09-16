function solution(arr) {
  let minNum = 0,
    sumNum = 0,
    oddNumArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNumArr.push(arr[i]);
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

// ES6 Spread Operator 할당(...oddNumArr)과
// 템플릿 리터럴`${sumNum}\n${minNum}`를 활용하면
// 코드가 간단하고 읽기 좋아진다.

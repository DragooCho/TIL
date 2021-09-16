function solution(N) {
  const arr1 = Array.from({ length: N + 1 }, (v, i) => i);

  // const answer = arr.reduce((acc, cur, index, array) => {
  //   return acc + cur;
  // }, 0);

  //////////////
  const result = 0;
  const answer = arrAllSumAndResults(arr1, result);
  //////////////
  return answer;
}

/////////////////////////// 유용한 함수
const arrAllSumAndResults = (arr, result) => {
  arr.forEach((e) => (result += e));
  return result;
};
//////////////////////////

console.log(solution(10));

// 단순 배열요소들끼리 합산한 결과를 원하는거면 forEach()가 더 간단하다.

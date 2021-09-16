// 배열 요소들의 모든 수를 합산해 결과값 출력
const arrAllSumAndResults = (arr, result) => {
  arr.forEach((e) => (result += e));
  return result;
};

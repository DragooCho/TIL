function solution(arr, n) {
  let answer = 0;
  let chance = 1;
  let sum = 0;
  let newArr = [];
  let max = arr[0][0];

  for (let y = 0; y < arr.length - 1; y++) {
    if (arr[y][0] < arr[y + 1][0]) {
      max = arr[y + 1][0];
    }
  }

  for (let y = 0; y < arr.length; y++) {
    if (max === arr[y][0] && chance !== 0) {
      chance--;
      let division = arr[y][0] / 2;
      newArr.push(division + arr[y][1]);
      continue;
    }
    newArr.push(arr[y][0] + arr[y][1]);
  }

  console.log(newArr);
  newArr.sort((a, b) => a - b);

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
    answer++;
    if (sum > n) {
      return answer - 1;
    }
  }
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [10, 5],
  [10, 3],
];

console.log(solution(arr, 28));

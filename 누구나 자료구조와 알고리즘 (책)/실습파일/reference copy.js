// Ctrl + Ait + N --- 입출력 작동

//1. 하나의 값을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

//2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

//3. 여러 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/)

//5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
// const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
//ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// const n = input[0];
// const n_arr = input.slice(1, n+1);
// const [m, ...m_arr] = input.slice(n+1);

// 배열 요구사항
// JS의 Array를 이용해 길이 5 이상의 string 배열 만들기
// JS의 Array를 이용해 기본적인 내장 함수(push, pop, shift, unshift, indexOf, splice, slice)
// JS의 Array를 이용해 심화적인 내장 함수(map, filter, find, keys, concat, flat, entries, includes)
// Math for forEach toLowerCase() / toUpperCase() split()
const rectangles = [
  [1, 1, 6, 5],
  [2, 0, 4, 2],
  [2, 4, 5, 7],
  [4, 3, 8, 6],
  [7, 5, 9, 7],
]; // 테스트케이스를 기입하는 곳

function solution(rectangles) {
  const [x1, y1, x2, y2] = 0;
  var resSum = 0;
  var newArr = [];
  for (var i = 0; i < rectangles.length; i++) {
    [x1, y1, x2, y2] = rectangles[i];
    const sum = (x2 - x1) * (y2 - y1);
    resSum += sum;
    newArr.push([x1, y1, x2, y2]);
  }
  var answer = resSum;
  console.log(answer);
  console.log(newArr[2].x2);
}

solution(rectangles);

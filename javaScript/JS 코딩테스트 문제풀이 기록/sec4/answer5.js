// function solution(arr, n) {
//   let answer = 0;
//   let sum = 0;

//   arr.sort((a, b) => b - a);

//   console.log(arr);

//   let max = arr[0];
//   let count = n;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== max) {
//       sum += arr[i-1];
//       max = arr[i];
//     }
//     // arr.shift();
//   }

//   sum += arr[n - 1];

//   console.log(arr, sum);

//   return answer;
// }

// let arr = [13, 15, 34, 45, 45, 65, 65, 11, 26, 42];

// console.log(solution(arr, 3));

function solution(n, k, arr) {
  let answer = 0;
  let temp = new Set();
  // 배열 안의 중복숫자를 제거하기 위해
  // new Set()으로 겍체생산연산자를 만든다. 즉 여기서는 배열이 아닌 겍체로 변환된다.

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(arr[i] + arr[j] + arr[k]);
        // add()는 Set겍체에 값을 집어 넣을때 유용하다.
      }
    }
  }

  let a = Array.from(temp).sort((a, b) => b - a);
  // Array.from(temp)은 해당 겍체(temp)를 배열로 변환해준다.

  answer = a[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(10, 3, arr));

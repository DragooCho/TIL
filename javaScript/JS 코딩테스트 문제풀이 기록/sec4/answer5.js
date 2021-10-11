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

function solution(arr, n) {
  let answer = 0;
  let sum = 0;

  arr.sort((a, b) => b - a);

  let max = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max && count < n - 1) {
      console.log(arr[i - 1]);
      sum += arr[i - 1];
      max = arr[i];
      count++;
    }

    // arr.shift();
  }

  // sum += arr[n - 1];

  console.log(arr, sum);

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(arr, 3));

// function solution(arr, s) {
//   let answer = [];

//   return answer;
// }

// let arr = [];

// console.log(solution(arr, "e"));
let num = 6;

function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num >= 2 && num % i !== 0) return true;
    console.log(i);
  }
}

console.log(isPrime(num));

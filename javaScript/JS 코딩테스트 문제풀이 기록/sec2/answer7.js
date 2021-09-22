function solution(arr, num) {
  let answer = 0;
  // for (let i of arr) {
  //   if (i % 10 === num) answer++;
  // }

  arr.forEach((i) => {
    if (i % 10 === num) answer++;
  });

  return answer;
}

let arr = [12, 77, 38, 42, 53, 92, 85];
console.log(solution(arr, 2));

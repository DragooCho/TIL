function solution(arr, n) {
  // let answer = 0;
  // let longer = 0;

  // for (let i of arr) {
  //   if (i.length > longer) {
  //     longer = i.length;
  //     answer = i;
  //   }
  // }

  // for (let i = 0; i < n; i++) {
  //   if (arr[i].length > longer) {
  //     longer = arr[i].length;
  //     answer = arr[i];
  //   }
  // }

  let answer = "";

  for (let i = 0; i < n; i++) {
    if (arr[i].length > answer.length) answer = arr[i];
  }

  return answer;
}

let array = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(array, 5));

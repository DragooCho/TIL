function solution(arr) {
  let answer = "";
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) count++;
    else {
      answer += arr[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }

  return answer;
}

const str = "KTTTTKHSSSEU";

console.log(solution(str));

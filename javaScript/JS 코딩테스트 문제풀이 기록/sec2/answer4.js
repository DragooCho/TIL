function solution(arr) {
  let answer = 0;
  let add = 0;

  arr.forEach((e) => {
    // if (e === 1) {
    //   add++;
    //   answer += add;
    // } else {
    //   add = 0;
    // }
    e === 1 ? (add++, (answer += add)) : (add = 0);
  });

  return answer;
}

const array = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(array));

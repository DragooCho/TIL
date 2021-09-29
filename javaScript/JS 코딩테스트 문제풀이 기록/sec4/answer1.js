function solution(arr) {
  let answer,
    maxStrSum = 0;

  for (let e of arr) {
    const strSum = String(e)
      .split("")
      .reduce((a, b) => Number(a) + Number(b));

    if (strSum > maxStrSum) {
      answer = Number(e);
      maxStrSum = strSum;
    } else if (strSum === maxStrSum) {
      if (Number(e) > answer) answer = Number(e);
    }
  }

  return answer;
}

let arr = [128, 821, 603, 40, 521, 4221, 137];

console.log(solution(arr));

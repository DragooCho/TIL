function solution(arr) {
  let answer = [];
  let sosu = [2, 3, 5, 7];

  for (let e of arr) {
    let nSum = Number(String(e).split("").reverse().join(""));

    let count = 0;

    for (let i of sosu) {
      if (nSum === i || (nSum % i !== 0 && nSum !== 1)) count++;
    }

    if (count === 4) answer.push(nSum);
  }

  return answer;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));

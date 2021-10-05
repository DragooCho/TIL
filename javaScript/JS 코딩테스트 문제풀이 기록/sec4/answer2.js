function solution(arr) {
  let answer = [];
  // let sosu = [2, 3, 5, 7];

  // for (let e of arr) {
  //   let nSum = Number(String(e).split("").reverse().join(""));

  //   let count = 0;

  //   for (let i of sosu) {
  //     if (nSum === i || (nSum % i !== 0 && nSum !== 1)) count++;
  //   }

  //   if (count === 4) answer.push(nSum);
  // }

  function sosu(n) {
    if (n === 1) return false;
    // 순회 하기 전에 미리 1를 검사한다.
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    // 루트값을 이용하면 시간복잡도는 O(√N)이 된다.
    // 루트함수를 사용하지않고 i의 제곱값으로도 계산이 가능하다.
    return true;
  }

  for (let e of arr) {
    let nSum = Number(String(e).split("").reverse().join(""));

    if (sosu(nSum)) answer.push(nSum);
  }

  return answer;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));

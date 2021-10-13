function solution(k, arr) {
  let answer = 0;
  let temp = new Set();
  let n = arr.length;
  // 배열 안의 중복숫자를 제거하기 위해
  // new Set()으로 겍체생산연산자를 만든다. 즉 여기서는 배열이 아닌 겍체로 변환된다.

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(arr[i] + arr[j] + arr[k]);
        // add()는 Set겍체에 값을 집어 넣을때 유용하다.
        // 또한 Set()특성에 의해 들어온 합산값에서 같은 합산값은 제거된다.
      }
    }
  }

  let a = Array.from(temp).sort((a, b) => b - a);
  // Array.from(temp)은 해당 겍체(temp)를 배열로 변환해준다.

  answer = a[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(3, arr));

function solution(arr) {
  let answer = 0,
    n = arr.length,
    nX = [0, 1, 0, -1],
    nY = [-1, 0, 1, 0];
  // 상하좌우를 순회하기 위한 2차원배열

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let longer = 1;
      // 일단 카운트에 넣어둘 점수를 먼저 지정하고
      // 주변에 큰 숫자가 한 번이라도 나오면 이 점수를 없앤다.

      for (let k = 0; k < 4; k++) {
        let zX = j + nX[k],
          zY = i + nY[k];
        // 상하좌우를 순회하는 행과 열의 변수 지정

        if (
          zX >= 0 &&
          zX <= 4 &&
          zY >= 0 &&
          zY <= 4 &&
          arr[zY][zX] > arr[i][j]
        ) {
          longer = 0;
          break;
          // 큰 숫자가 한번이라도 나오면 봉우리의 자격이 없기 때문에
          // 상하좌우의 순회를 멈추는게 작업효율을 높인다.
        }
      }

      answer += longer;
      // 이 구역에 if문을 걸쳤다면 0이 카운트에 더해저 값이 변하지않고,
      // 안 걸쳤다면 봉우리의 자격을 유지했기에
      // longer값을 그대로 유지한 1의 값이 카운트에 더해진다.
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

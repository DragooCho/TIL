function solution(arr) {
  let answer = 0,
    longer = 0;

  // arr.map((e) => {
  //   if (e > longer) {
  //     longer = e;
  //     answer++;
  //   }
  // });

  arr.forEach((e) => {
    e > longer ? ((longer = e), answer++) : answer;
  });
  // map()도 쓸 수 있으나 새배열로 반환 해주는게 아니면 forEach()도 유효하다.

  return answer;
}

// for문을 두번 돌아 푸는 방법이 있으나 O(n2)라는 시간복잡도 효율이 낮아진다.
// o(n)으로도 풀 수있으니 시간복잡도 효율이 더 좋은 방법을 쓰는게 좋다.

let array = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(array));

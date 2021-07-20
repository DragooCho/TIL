const food_times = [3, 1, 2]; // 테스트케이스를 기입하는 곳
const k = 5;

//////////////////////////////////////// 프로그래머스 코딩테스트 답안구역

function solution(food_times, k) {
  let count = k;
  let zeroFood = 0;
  let answer = 0;

  let i = 0;
  while (count >= 0) {
    if (i > food_times.length - 1) {
      i = 0;
    }

    if (food_times[i] !== 0) {
      food_times[i] -= 1;
    } else {
      zeroFood++;
      count++;
    }

    count -= 1;
    if (zeroFood >= food_times.length) {
      answer = -1;
      break;
    }
    i++;
    answer = i;
  }
  return console.log(answer); // IDE 콘솔창 전용 코드, 실제 문제에선 console.log()없이 answer 그대로...
}

/////////////////////////// 프로그래머스 코딩테스트 답안구역

solution(food_times, k); // 테스트케이스를 확인하기 위한 함수

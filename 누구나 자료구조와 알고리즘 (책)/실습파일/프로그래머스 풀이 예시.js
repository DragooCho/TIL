const food_times = [3, 1, 2];
const k = 5;

function solution(food_times, k) {
  let count = k;
  let zeroFood = 0;
  let answer = 0;

  let i = 0;
  while (count >= 0) {
    console.log("idk");
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
  return console.log(answer);
}

solution(food_times, k);

function bubbleSort(arr) {
  let result = [...arr]; // 원본 데이터 복사

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  console.log(steps);
  return result;
}

let items2 = [11, 8, 9, 1, 5, 10, 15, 32, 81, 65, 18];

bubbleSort(items2);

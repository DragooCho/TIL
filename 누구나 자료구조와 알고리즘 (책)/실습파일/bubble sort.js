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

  return result;
}

// bubbleSort(items2);

let items2 = [11, 8, 9, 1, 5, 10, 15, 32, 81, 65, 18];
let items1 = ["가", "나", "차", "카", "사", "아", "바", "마", "자", "라", "다"];

// items1.sort((a, b) => a - b);
// items1.sort();

let result = [...items2, ...items1, ...[1, 2]];

console.log(result);

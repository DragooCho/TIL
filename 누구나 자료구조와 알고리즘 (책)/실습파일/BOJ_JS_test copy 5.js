const fs = require("fs");
const [...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000 70 170`
)
  .trim()
  .split(" ");

let initialCost = Number(arr[0]);
let unitPrice = Number(arr[1]);
let retailPrice = Number(arr[2]);

let numberOfSales = 0;

let totalCost = initialCost + unitPrice;
let totalIncome = retailPrice;

if (totalIncome > totalCost) {
  numberOfSales = 1;
}

while (totalCost >= totalIncome) {
  numberOfSales++;
  if (unitPrice >= retailPrice) {
    numberOfSales = -1;
    break;
  }
  totalCost = initialCost + unitPrice * numberOfSales;
  totalIncome = retailPrice * numberOfSales;
}

console.log(numberOfSales);

// 처음부터 변수명으로 지으면서 코드를 짤려고 하니 햇갈리기도 하다 영어단어가 익숫치 않아서일지도 모른다. 처음에는 그냥 간단한 변수로 짜고 나중에 바꾸는게 개인적으로 더 좋을 듯

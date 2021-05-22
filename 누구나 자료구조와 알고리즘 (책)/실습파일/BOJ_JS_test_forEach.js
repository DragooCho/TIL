const fs = require("fs");
const [input] = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : ` `
)
  .trim()
  .split("\n");

let newArr = input.split(" ");

if (newArr[0] === "") {
  newArr.pop();
}

console.log(newArr.length);

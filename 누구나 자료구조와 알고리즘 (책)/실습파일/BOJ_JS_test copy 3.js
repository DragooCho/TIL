const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `734 893`
)
  .trim()
  .split(" ");

console.log(input);

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
1
3
2
3
`
)
  .trim()
  .split("\n")
  .map((num) => Number(num));

const tcNum = input.shift();

for (let i = 0; i < tcNum; i++) {
  const Floor = input.shift();
  const b = input.shift();
  const apt = [];

  for (let i = 0; i <= Floor; i++) {
    apt.push([1]);

    for (let j = 1; j <= b; j++) {
      if (i === 0) {
        apt[i].push(j + 1);
      } else {
        apt[i].push(apt[i][j - 1] + apt[i - 1][j]);
      }
    }
    console.log(i, apt);
  }

  const room = b - 1;

  console.log(apt[Floor][room]);
}

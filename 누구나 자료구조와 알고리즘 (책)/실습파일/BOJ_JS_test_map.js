// Ctrl + Ait + N --- 입출력 작동

const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`
)
    .trim()
    .split("\n");

let inputLine = input.map((num) =>
    num.split(" ").map((array) => Number(array))
);
let answer = "";

let nNumber = inputLine[0][0];

for (let i = 1; i <= nNumber; i++) {
    let scoreSum = null;
    let midScore = null;
    let count = null;
    for (let j = 1; j <= inputLine[i][0]; j++) {
        scoreSum += inputLine[i][j];
    }
    midScore = scoreSum / inputLine[i][0];

    for (let z = 1; z <= inputLine[i][0]; z++) {
        let parMidScore = parseInt(midScore);
        if (parMidScore < inputLine[i][z]) {
            count++;
        }
    }
    answer += (100 / (inputLine[i][0] / count)).toFixed(3) + "%" + "\n";
}

console.log(answer);

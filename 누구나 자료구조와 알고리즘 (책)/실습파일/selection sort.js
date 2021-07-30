// function selectionSort(array) {
//   for (var i = 0; i < array.length; i++) {
//     var lowestNumberIndex = i;
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[j] < array[lowestNumberIndex]) {
//         lowestNumberIndex = j;
//       }
//     }
//     if (lowestNumberIndex != i) {
//       var temp = array[i];
//       array[i] = array[lowestNumberIndex];
//       array[lowestNumberIndex] = temp;
//     }
//   }
//   return array;
// }

// const answers = [1, 2, 3, 4, 5];

// function solution(answers) {
//   var answer = [];
//   var a = 0;
//   var b = 0;
//   var c = 0;
//   var mans = [a, b, c];
//   var queS = [
//     [1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   ];

//   for (let i = 0; i < mans.length; i++) {
//     let count = 0;
//     for (let j = 0; j < answers.length; j++) {
//       if (answers[j] === queS[i][j]) {
//         count += 1;
//         console.log(mans[j]);
//       }
//     }
//     mans[i] = count;
//   }

//   mans.sort((a, b) => a - b);

//   answer = [...mans];

//   return console.log(answer);
// }

// solution(answers);

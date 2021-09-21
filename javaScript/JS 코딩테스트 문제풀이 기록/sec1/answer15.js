function solution(str) {
  let answer = "";
  // const oneMidWord = str[Math.ceil(str.length / 2 - 1)];
  // const twoMidWord = `${str[Math.ceil(str.length / 2 - 1)]}${
  //   str[Math.ceil(str.length / 2)]
  // }`;

  // if (str.length % 2 === 0) {
  //   answer = twoMidWord;
  // } else {
  //   answer = oneMidWord;
  // }

  // const twoMidWord = Math.floor(str.length / 2);
  // const oneMidWord = twoMidWord - 1;
  // if (str.length % 2 === 0) answer = `${str[oneMidWord]}${str[twoMidWord]}`;
  // else answer = str[oneMidWord];

  const MidWord = Math.floor(str.length / 2);
  if (str.length % 2 !== 0) answer = str.substr(MidWord, 1);
  else answer = str.substr(MidWord - 1, 2);

  // Math.ceil() : 크거나 같은 수 중 가장 작은 정수를 반환 (반올림)
  // Math.floor() : 작거나 같은 수 중 가장 큰 정수를 반환 (반내림)

  return answer;
}

let str = "goodgoodgood";
console.log(solution(str));

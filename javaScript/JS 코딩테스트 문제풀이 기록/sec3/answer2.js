function solution(str) {
  let answer = "yes",
    n = str.length;

  str = str.toLowerCase();

  // revStr = str.split("").reverse().join("");
  // // reverse()는 문자열에 바로 적용할 수 없기 때문에
  // // 한글자씩 분리해 배열로 만든 후 reverse() 적용하고 다시 문자열로 합쳐준다.

  // if (str !== revStr) answer = "no";

  for (let i = 0; i < Math.floor(n / 2); i++) {
    // Math.floor()로 반내림 하여 자연수를 만들면
    // 가운데 문자는 불필요하게 순회 하지 않게 된다.
    if (str[i] !== str[n - 1 - i]) answer = "no";
  }

  return answer;
}

let string = "GaQtqag";

console.log(solution(string));

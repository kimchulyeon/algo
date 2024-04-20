/**
 * a는 3자리 숫자로 된 정답을 하나 정한다
 * b는 3자리 숫자를 제시해서 a가 생각하고 있는 정답을 맞히려고 한다.
 * b가 말한 숫자가 정답에 포함되어 있다면 1볼
 * b가 말한 숫자가 정답에 포함되어 있고, 자리도 동일하다면 1스트라이크
 * 다른 숫자로 이루어진 3자리수
 */

const CHANCE = 4;
const ARR = [
  [123, 1, 1],
  [356, 1, 0],
  [327, 2, 0],
  [489, 0, 1],
];

const solution = () => {
  let answer = 0;

  // 백의 자리수
  for (let a = 1; a <= 9; a++) {
    // 십의 자리수
    for (let b = 0; b <= 9; b++) {
      // 일의 자리수
      for (let c = 0; c <= 9; c++) {
        // a, b, k는 같은 숫자일 수 없다 (continue로 다음 코드 실행 X, 반복문은 계속 실행)
        if (a === b || b === c || a === c) continue;

        let count = 0;

        for (const hint of ARR) {
          const [number, strike, ball] = hint;
          const digits = String(number).split("").map(Number);
          let ball_count = 0;
          let strike_count = 0;

          // a, b, c와 number를 비교
          // a, b, c 중에 numbers가 갖고 있는 숫자가 있다면 1볼
          // 갖고 있는 숫자가 자리수까지 같다면 1스트라이크
          if (digits[0] === a) strike_count++;
          if (digits[1] === b) strike_count++;
          if (digits[2] === c) strike_count++;

          if (digits.includes(a) && digits.indexOf(a) !== 0) ball_count++;
          if (digits.includes(b) && digits.indexOf(b) !== 1) ball_count++;
          if (digits.includes(c) && digits.indexOf(c) !== 2) ball_count++;

          if (ball === ball_count && strike === strike_count) {
            count++;
          }
        }

        if (count === CHANCE) {
          answer++;
        }
      }
    }
  }

  return answer;
};

const r = solution(ARR);
console.log(r);

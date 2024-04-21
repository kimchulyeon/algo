/**
 * N명의 학생들이 한 곳에 모인다.
 * N명의 학생들 집이 x, y 2차원으로 주어졌을 때, N명의 학생들이 모일 수 있는 최소 거리를 계산해라
 * N은 50 이하의 수
 * x, y 좌표는 1_000_000 이하의 수
 */

// N명의 사람들의 집 위치
let HOUSES = [
  [15, 14],
  [15, 16],
  [14, 15],
  [16, 15],
];

let X_HOUSES = HOUSES.map((h) => h[0]); // x축
let Y_HOUSES = HOUSES.map((h) => h[1]); // y축
let ANSWERS = new Array(HOUSES.length).fill(-1); // 정답

for (const x of X_HOUSES) {
  for (const y of Y_HOUSES) {
    let distance = [];

    for (const [house_x, house_y] of HOUSES) {
      const d = Math.abs(house_x - x) + Math.abs(house_y - y);
      distance.push(d);
    }

    distance.sort((a, b) => a - b);

    let temp = 0;
    for (let i = 0; i < distance.length; i++) {
      temp += distance[i];

      if (ANSWERS[i] === -1) {
        ANSWERS[i] = temp;
      } else {
        ANSWERS[i] = Math.min(temp, ANSWERS[i]);
      }
    }
  }
}

console.log(ANSWERS);

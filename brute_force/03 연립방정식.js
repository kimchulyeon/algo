/**
 * ax + by = c
 * dx + ey = f
 * 위 a,b,c,d,e,f 숫자가 주어질 때 연립방정식 x, y의 값을 구해라
 *
 * x와 y는 -10000이상 10000 이하의 수
 */

const nums = [1, 3, -1, 4, 1, 7];

const solution = (nums) => {
  const [a, b, c, d, e, f] = nums;

  // x는 -10000이상 10000이하의 수
  for (let x = -10000; x <= 10000; x++) {
    // y는 -10000이상 10000이하의 수
    for (let y = -10000; y <= 10000; y++) {
      // 연립방정식
      if (a * x + b * y === c) {
        // 연립방정식
        if (d * x + e * y === f) {
          console.log(x, y);
        }
      }
    }
  }
};

const r = solution(nums);
console.log(r);

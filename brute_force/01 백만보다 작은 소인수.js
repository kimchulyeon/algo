/**
 * 완전 탐색은 근본!
 * https://www.acmicpc.net/problem/1816
 */

const arr = [1000036000099, 1500035500153, 20000000000002];

arr.forEach((n) => {
  for (let i = 2; i < 1_000_001; i++) {
    if (n % i === 0) return console.log("NO");
    if (i === 1_000_000) return console.log("YES");
  }
});

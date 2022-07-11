const n = 10;

function solution(n) {
  const array = [false, false, ...Array(n - 1).fill(true)];

  for (let i = 2; i * i <= n; i++) {
    if (array[i]) {
      for (let j = i * 2; j <= n; j += i) {
        array[j] = false;
      }
    }
  }
  return array.filter(Boolean).length;
}

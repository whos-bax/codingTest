const number = "1924";
const k = 2;
// 큰 값이 나오면 이전 값 중 더 작은 값은 삭제
// 스택의 바닥에서 -> 탑은 큰 수부터 작은수로 나열

function solution(number, k) {
  const array = [];
  let count = 0;
  for (const num of number) {
    while (count < k && array[array.length - 1] < num) {
      array.pop();
      count++;
    }
    array.push(num);
  }

  while (count < k) {
    array.pop();
    count++;
  }
  return array.join("");
}

solution(number, k);

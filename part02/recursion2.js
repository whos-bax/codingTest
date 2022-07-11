// 순열
function permutations(arr, n) {
  // 1개만 뽑는 다면 그대로 순열 반환, 탈출 조건으로도 사용
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소 순환
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐춘다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가
    result.push(...combine);
  });

  // 결과 반환
  return result;
}

// 조합
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합 반환, 탈출 조건으로도 사용
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소 순환
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과값을 추가
    result.push(...combine);
  });
  // 결과 반환
  return result;
}

// 두 개 뽑아서 더하기 문제
function combinations2(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations2(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

function solution(numbers) {
  // 1. 조합을 구한다. n개 중 2개
  // 2. 조합의 합을 구한다.
  // 3. 중복을 제거한다.
  // 4. 오름차순 정렬한다.
  return [
    ...new Set(combinations2(numbers, 2).map((combi) => combi[0] + combi[1])),
  ].sort((a, b) => a - b);
}

const s1 = "()()"
const s2 = "(())()"
const s3 = ")()("
const s4 = "(()("

function solution(s) {
    let stack = []
    let arr = s.split("")

    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === ")") {
            return false
        }
        if (arr[i] === "(") {
            stack.push("(")
        } else {
            stack.pop("(")
        }
    }
    return stack.length === 0
}

function solution2(s) {
    const stack = [];

    for (const c of s) {
        if (c === '(') {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0
}

function solution3(s) {
    let count = 0;
    for (const c of s) {
        if (c === '(') {
            count += 1;
        } else {
            if (count === 0) {
                return false;
            }
            count += 1;
        }
    }
    return count === 0
}

console.log(solution2(s1))
console.log(solution3(s1))
console.log(solution(s2))
console.log(solution(s3))
console.log(solution2(s4))
console.log(solution3(s4))

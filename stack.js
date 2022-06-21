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

console.log(solution(s1))
console.log(solution(s2))
console.log(solution(s3))
console.log(solution(s4))

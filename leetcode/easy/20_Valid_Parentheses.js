// 문제 유형: [스택 문제, 문자열 문제]
/**
 * 문제 설명:
 * 문자열 `s`는 '(', ')', '{', '}', '[', ']' 문자로만 구성되어 있습니다.
 * 문자열 `s`가 다음 조건을 만족하면 유효한 문자열로 간주됩니다:
 * 1. 열린 괄호는 동일한 종류의 닫힌 괄호로 닫혀야 합니다.
 * 2. 열린 괄호는 올바른 순서로 닫혀야 합니다.
 * 3. 닫힌 괄호는 대응되는 열린 괄호가 있어야 합니다.
 * 
 * 제한 사항:
 * 1. 1 <= s.length <= 10^4
 * 2. `s`는 괄호로만 이루어져 있습니다: '()[]{}'
 * 
 * 입출력 예:
 * s = "()" -> return true
 * s = "()[]{}" -> return true
 * s = "(]" -> return false
 * s = "([])" -> return true
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: `()`는 유효한 괄호 쌍입니다.
 * 2. 예제 #2: `()[]{}는 모든 괄호가 올바르게 쌍을 이루고 닫혔습니다.
 * 3. 예제 #3: `(]`는 올바른 쌍을 이루지 않습니다.
 * 4. 예제 #4: `([])`는 괄호가 올바른 순서로 쌍을 이루고 닫혔습니다.
 */

function solution(s) {
    let stack = [];
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let char of s) {
        // 열린 괄호일 경우 스택에 추가
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } 
        // 닫힌 괄호일 경우 스택에서 확인
        else if (char === ")" || char === "]" || char === "}") {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false; // 닫힌 괄호가 올바르지 않으면 false 반환
            }
        }
    }
    // 모든 괄호가 쌍을 이룬 경우 스택이 비어 있어야 함
    return stack.length === 0;
}

// 입출력 예시 테스트
console.log(solution("()")); // 기대 값: true
console.log(solution("()[]{}")); // 기대 값: true
console.log(solution("(]")); // 기대 값: false
console.log(solution("([])")); // 기대 값: true

/**
 * 시간 복잡도:
 * - O(n): 문자열의 각 문자를 한 번씩 확인합니다.
 * 
 * 공간 복잡도:
 * - O(n): 스택에 저장되는 열린 괄호의 수는 최대 문자열의 길이만큼 필요할 수 있습니다.
 */

/**
 * 개선할 점:
 * - 입력 문자열이 길 경우, 메모리 사용량을 줄이는 최적화를 고려할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(s) {
    let stack = [];
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let char of s) {
        if (pairs[char]) { // 닫힌 괄호인지 확인
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char); // 열린 괄호는 스택에 추가
        }
    }

    return stack.length === 0;
}

/** 
 * 개선된 시간 복잡도:
 * - O(n): 기존과 동일
 * 
 * 개선된 공간 복잡도:
 * - O(n): 기존과 동일
 */
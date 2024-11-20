// 문제 유형: [스택 문제]
/**
 * 문제 설명:
 * 주어진 문자열 배열 `tokens`는 **후위 표기법(Reverse Polish Notation)**으로 표현된 산술식을 나타냅니다.
 * 이를 평가하여 계산 결과를 정수로 반환하세요.
 * 
 * 제한 사항:
 * 1. 연산자는 `'+'`, `'-'`, `'*'`, `'/'`입니다.
 * 2. 각 피연산자는 정수 또는 또 다른 표현식입니다.
 * 3. 나눗셈 연산은 항상 0 방향으로 내림(truncate towards zero) 처리됩니다.
 * 4. 0으로 나누는 경우는 입력되지 않습니다.
 * 5. 입력은 항상 유효한 후위 표기법 산술 표현식을 나타냅니다.
 * 6. 계산 결과와 중간 계산값은 32비트 정수로 표현 가능합니다.
 * 
 * 입출력 예:
 * tokens = ["2", "1", "+", "3", "*"] -> return 9
 * tokens = ["4", "13", "5", "/", "+"] -> return 6
 * tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] -> return 22
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: (2 + 1) * 3 = 9
 * 2. 예제 #2: 4 + (13 / 5) = 6
 * 3. 예제 #3: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22
 */

function solution(tokens) {
    const numStack = []; // 숫자를 저장할 스택

    for (const token of tokens) {
        if (!isNaN(token)) { // 숫자인 경우
            numStack.push(Number(token));
        } else { // 연산자인 경우
            const b = numStack.pop(); // 두 번째 피연산자
            const a = numStack.pop(); // 첫 번째 피연산자
            let result;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b); // 0 방향으로 내림 처리
                    break;
            }

            numStack.push(result); // 계산 결과를 스택에 저장
        }
    }

    return numStack[0]; // 최종 결과 반환
}

// 입출력 예시 테스트
console.log(solution(["2", "1", "+", "3", "*"])); // 기대 값: 9
console.log(solution(["4", "13", "5", "/", "+"])); // 기대 값: 6
console.log(solution(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 기대 값: 22

/**
 * 시간 복잡도:
 * O(n) - `tokens` 배열의 모든 요소를 한 번 순회합니다.
 * 
 * 공간 복잡도:
 * O(n) - `numStack`의 최대 크기는 `tokens` 배열의 길이에 비례합니다.
 */

/**
 * 개선할 점:
 * 1. 추가적인 유효성 검사를 통해 입력 데이터가 올바른 형식인지 검증할 수 있습니다.
 * 2. 더 간결한 구현을 위해 일부 조건문을 축약할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(tokens) {
    const stack = [];
    
    tokens.forEach(token => {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const [b, a] = [stack.pop(), stack.pop()];
            const operation = {
                '+': a + b,
                '-': a - b,
                '*': a * b,
                '/': Math.trunc(a / b)
            };
            stack.push(operation[token]);
        }
    });

    return stack[0];
}

/** 
 * 개선된 시간 복잡도:
 * O(n) - 기존과 동일.
 * 
 * 개선된 공간 복잡도:
 * O(n) - 기존과 동일.
 */
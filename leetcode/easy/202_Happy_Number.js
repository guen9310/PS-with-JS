// 문제 유형: [수학적 시뮬레이션, 해시 셋 사용]
/**
 * 문제 설명:
 * 주어진 숫자가 '행복한 숫자'인지 판별하는 문제입니다. 행복한 숫자는 숫자의 각 자릿수를 제곱하여 합을 반복하여 구했을 때 1이 되는 숫자를 의미합니다.
 * 1이 되지 않고 계속 순환하는 숫자는 행복한 숫자가 아닙니다. 행복한 숫자이면 true를, 그렇지 않으면 false를 반환합니다.
 * 
 * 제한 사항:
 * 1. 1 <= n <= 2^31 - 1
 * 
 * 입출력 예:
 * n = 19 -> return true
 * n = 2 -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 19에서 시작하여 자릿수의 제곱합을 구하는 과정을 반복하여 1에 도달할 수 있으므로 true입니다.
 * 2. 예제 #2: 2는 반복해도 1에 도달하지 않으므로 false입니다.
 */

function solution(n) {
    return happy(n);
}

function happy(num, seen = new Set()) {
    if (num === 1) return true; // 1이면 행복한 숫자
    if (seen.has(num)) return false; // 무한 루프에 빠진 경우

    seen.add(num); // 현재 숫자를 방문 기록에 추가
    let result = 0;

    while (num > 0) {
        const digit = num % 10;
        result += digit ** 2;
        num = Math.floor(num / 10);
    }

    return happy(result, seen); // 재귀적으로 새로운 숫자로 검사
}

// 입출력 예시 테스트
console.log(solution(19)); // 기대 값: true
console.log(solution(2));  // 기대 값: false

/**
 * 시간 복잡도:
 * O(log n) - 숫자의 자릿수 개수에 비례하는 연산이 수행되며, 루프는 주어진 숫자가 1이 되거나 반복되지 않을 때까지 진행됩니다.
 * 
 * 공간 복잡도:
 * O(log n) - Set에 중복되지 않는 자릿수 제곱합을 저장합니다.
 */

/**
 * 개선할 점:
 * - 현재 재귀적으로 호출하고 있으므로, 재귀 호출 없이 while 루프를 사용해도 해결할 수 있습니다. 재귀 호출을 제거하면 메모리 사용량을 줄일 수 있습니다.
 */

// 개선된 답변
function solutionImproved(n) {
    const seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);

        let result = 0;
        while (n > 0) {
            const digit = n % 10;
            result += digit ** 2;
            n = Math.floor(n / 10);
        }
        n = result;
    }

    return true;
}

/** 
 * 개선된 시간 복잡도:
 * O(log n) - 복잡도는 동일합니다.
 * 
 * 개선된 공간 복잡도:
 * O(log n) - 메모리 사용량은 동일하나, 재귀 호출 스택을 사용하지 않아 메모리 최적화가 가능합니다.
 */
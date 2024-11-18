// 문제 유형: [슬라이딩 윈도우, 배열 문제]
/**
 * 문제 설명:
 * 원형 배열 `code`와 정수 `k`가 주어집니다. 각 숫자를 다음과 같은 규칙으로 동시에 교체하세요:
 * 1. `k > 0`: `i`번째 숫자를 다음 `k`개의 숫자의 합으로 교체합니다.
 * 2. `k < 0`: `i`번째 숫자를 이전 `k`개의 숫자의 합으로 교체합니다.
 * 3. `k == 0`: 모든 숫자를 0으로 교체합니다.
 * 배열은 원형이므로, 마지막 요소 다음에는 첫 번째 요소가, 첫 번째 요소 이전에는 마지막 요소가 위치합니다.
 * 
 * 제한 사항:
 * 1. 1 ≤ `code.length` ≤ 100
 * 2. 1 ≤ `code[i]` ≤ 100
 * 3. -100 ≤ `k` ≤ 100
 * 
 * 입출력 예:
 * code = [5, 7, 1, 4], k = 3 -> return [12, 10, 16, 13]
 * code = [1, 2, 3, 4], k = 0 -> return [0, 0, 0, 0]
 * code = [2, 4, 9, 3], k = -2 -> return [12, 5, 6, 13]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 각 숫자는 다음 3개의 숫자의 합으로 교체됩니다.
 *    - 5 -> 7+1+4 = 12
 *    - 7 -> 1+4+5 = 10
 *    - 1 -> 4+5+7 = 16
 *    - 4 -> 5+7+1 = 13
 * 2. 예제 #2: `k == 0`일 때 모든 숫자는 `0`으로 교체됩니다.
 * 3. 예제 #3: 각 숫자는 이전 2개의 숫자의 합으로 교체됩니다.
 *    - 2 -> 3+9 = 12
 *    - 4 -> 2+3 = 5
 *    - 9 -> 4+2 = 6
 *    - 3 -> 9+4 = 13
 */

function solution(code, k) {
    const n = code.length;
    const codes = [...code, ...code];
    if (k === 0) {
        return Array(n).fill(0);
    }

    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        if (k > 0) {
            result[i] = codes.slice(i + 1, i + 1 + k).reduce((acc, cur) => acc + cur, 0);
        } else {
            result[i] = codes.slice(n + i + k, n + i).reduce((acc, cur) => acc + cur, 0);
        }
    }
    return result;
}

// 입출력 예시 테스트
console.log(solution([5, 7, 1, 4], 3)); // 기대 값: [12, 10, 16, 13]
console.log(solution([1, 2, 3, 4], 0)); // 기대 값: [0, 0, 0, 0]
console.log(solution([2, 4, 9, 3], -2)); // 기대 값: [12, 5, 6, 13]

/**
 * 시간 복잡도:
 * - 슬라이싱과 합산은 각각 O(k)로 실행되며, 이를 배열의 모든 요소에 대해 반복하므로 전체 시간 복잡도는 O(n * |k|)입니다.
 * 
 * 공간 복잡도:
 * - 복사된 배열 `codes`가 필요하므로 추가 공간 복잡도는 O(n)입니다.
 */

/**
 * 개선할 점:
 * - 슬라이싱 대신 직접 값을 계산하여 메모리 사용을 줄이는 방식으로 최적화할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(code, k) {
    const n = code.length;
    if (k === 0) return Array(n).fill(0);

    const result = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n];
            }
        } else {
            for (let j = -1; j >= k; j--) {
                sum += code[(i + j + n) % n];
            }
        }
        result[i] = sum;
    }
    return result;
}

/** 
 * 개선된 시간 복잡도:
 * - O(n * |k|)로 동일하지만, 추가 메모리 사용을 피하여 효율성을 증가시켰습니다.
 * 
 * 개선된 공간 복잡도:
 * - O(1): 추가 배열을 생성하지 않아 공간 사용량이 줄어들었습니다.
 */
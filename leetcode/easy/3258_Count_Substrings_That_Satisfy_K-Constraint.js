// 문제 유형: 브루트포스, 슬라이딩 윈도우 문제
/**
 * 문제 설명:
 * 이진 문자열 `s`와 정수 `k`가 주어집니다.
 * `k-제약 조건`을 만족하는 이진 문자열의 모든 부분 문자열을 찾아 그 개수를 반환합니다.
 * `k-제약 조건`이란 다음 조건 중 하나라도 충족되는 경우를 의미합니다.
 * - 문자열의 '0' 개수가 `k` 이하인 경우
 * - 문자열의 '1' 개수가 `k` 이하인 경우
 * 
 * 제한 사항:
 * 1. 문자열 `s`의 길이는 1 이상 1000 이하입니다.
 * 2. `s`는 '0'과 '1'로만 구성됩니다.
 * 3. `k`는 0 이상 `s`의 길이 이하인 정수입니다.
 * 
 * 입출력 예:
 * s = "10101", k = 1 -> return 12
 * s = "1010101", k = 2 -> return 25
 * s = "11111", k = 1 -> return 15
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 문자열 `s`의 모든 부분 문자열 중에서 "1010", "10101", "0101"을 제외한 모든 부분 문자열이 `k-제약 조건`을 만족합니다.
 * 2. 예제 #2: 문자열 `s`의 길이가 5를 초과하는 부분 문자열을 제외한 모든 부분 문자열이 `k-제약 조건`을 만족합니다.
 * 3. 예제 #3: 문자열 `s`의 모든 부분 문자열이 `k-제약 조건`을 만족합니다.
 */

function solution(s, k) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let zero = 0, one = 0;
        for (let j = i; j < s.length; j++) {
            if (s[j] === '0') {
                zero += 1;
            } else {
                one += 1;
            }

            if (zero <= k || one <= k) {
                count += 1;
            } else {
                break;
            }
        }
    }
    return count;
}

// 입출력 예시 테스트
console.log(solution("10101", 1)); // 기대 값: 12
console.log(solution("1010101", 2)); // 기대 값: 25
console.log(solution("11111", 1)); // 기대 값: 15

/**
 * 시간 복잡도:
 * O(n^2) - 이중 for문을 사용하여 각 시작 인덱스에서 모든 부분 문자열을 탐색하므로 O(n^2) 시간 복잡도가 발생합니다.
 * 
 * 공간 복잡도:
 * O(1) - 별도의 배열이나 추가 데이터 구조를 사용하지 않고, 상수 공간 복잡도를 가집니다.
 */

/**
 * 개선할 점:
 * - 슬라이딩 윈도우 기법을 적용하여 각 부분 문자열을 매번 처음부터 계산하지 않도록 개선할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(s, k) {
    let count = 0;
    let zeroCount = 0;
    let oneCount = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        // 현재 문자가 '0'인지 '1'인지에 따라 카운트를 증가
        if (s[right] === '0') zeroCount++;
        else oneCount++;

        // `k-제약 조건`을 위반하면 left 포인터를 이동
        while (zeroCount > k && oneCount > k) {
            if (s[left] === '0') zeroCount--;
            else oneCount--;
            left++; // 윈도우의 시작점을 이동
        }

        // 현재 윈도우에서 가능한 부분 문자열의 개수를 누적
        count += right - left + 1;
    }

    return count;
}

// 입출력 예시 테스트
console.log(solutionImproved("10101", 1)); // 기대 값: 12
console.log(solutionImproved("1010101", 2)); // 기대 값: 25
console.log(solutionImproved("11111", 1)); // 기대 값: 15

/** 
 * 개선된 시간 복잡도:
 * O(n) - 두 포인터를 사용하여 문자열을 한 번만 순회하므로 O(n) 시간 복잡도를 가집니다.
 * 
 * 개선된 공간 복잡도:
 * O(1) - 추가적인 데이터 구조를 사용하지 않으므로 상수 공간 복잡도를 유지합니다.
 */
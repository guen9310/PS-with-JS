// 문제 유형: [투 포인터 문제]

/**
 * 문제 설명:
 * 두 문자열 s와 t가 주어졌을 때, s가 t의 서브시퀀스(subsequence)인지를 확인하는 문제입니다.
 * 서브시퀀스란, 원래 문자열의 상대적인 위치를 유지하면서 일부 문자를 삭제하여 형성된 새로운 문자열을 의미합니다.
 * 예를 들어, "ace"는 "abcde"의 서브시퀀스이지만 "aec"는 아닙니다.
 * 
 * 제한 사항:
 * 1. 0 <= s.length <= 100
 * 2. 0 <= t.length <= 10^4
 * 3. s와 t는 소문자 영어 알파벳으로만 구성됩니다.
 * 
 * 입출력 예:
 * s = "abc", t = "ahbgdc" -> return true
 * s = "axc", t = "ahbgdc" -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: s의 모든 문자가 t에서 상대적 순서를 유지하면서 나타나므로 true를 반환합니다.
 * 2. 예제 #2: s의 문자가 t에서 상대적 순서를 유지하면서 나타나지 않으므로 false를 반환합니다.
 */

function solution(s, t) {
    let count = 0;
    for (let c of t) {
        if (s[count] === c) count++;
    }
    return count === s.length;
}

// 입출력 예시 테스트
console.log(solution("abc", "ahbgdc")); // 기대 값: true
console.log(solution("axc", "ahbgdc")); // 기대 값: false

/**
 * 시간 복잡도:
 * O(n) - t의 길이에 비례하여 순회하므로 O(n) 시간 복잡도를 가집니다.
 * 
 * 공간 복잡도:
 * O(1) - 추가적인 메모리 사용이 거의 없으므로 상수 공간 복잡도를 가집니다.
 */

/**
 * 개선할 점:
 * 현재 알고리즘은 최적화된 상태입니다. s와 t의 상대적 위치를 유지하는 비교가 효율적으로 이루어지므로 추가적인 최적화가 필요하지 않습니다.
 */

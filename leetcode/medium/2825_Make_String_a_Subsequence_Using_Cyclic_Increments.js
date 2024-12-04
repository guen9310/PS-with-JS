// 문제 유형: 문자열 처리 문제, 서브시퀀스 확인 문제

/**
 * 문제 설명:
 * 주어진 두 문자열 `str1`과 `str2`에 대해, `str1`의 일부 인덱스를 선택하여 해당 문자를 다음 문자로 순환 증가시키는 작업(최대 1회)으로 `str2`를 `str1`의 서브시퀀스로 만들 수 있는지 확인하세요.
 * 
 * 작업 설명:
 * - 'a'는 'b'로, 'b'는 'c'로 증가하며, 'z'는 'a'로 순환합니다.
 * - 서브시퀀스는 문자열에서 일부 문자를 제거하고 나머지 문자의 상대적 순서를 유지하여 얻을 수 있는 문자열입니다.
 * 
 * 제한 사항:
 * 1. 1 <= str1.length <= 10^5
 * 2. 1 <= str2.length <= 10^5
 * 3. str1과 str2는 소문자 영어 문자로만 구성됩니다.
 * 
 * 입출력 예:
 * str1 = "abc", str2 = "ad" -> return true
 * str1 = "zc", str2 = "ad" -> return true
 * str1 = "ab", str2 = "d" -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 
 *    - str1의 2번 인덱스를 선택하여 'c'를 'd'로 변경합니다. 결과: "abd".
 *    - "abd"에서 "ad"는 서브시퀀스입니다.
 * 2. 예제 #2:
 *    - str1의 0번 인덱스를 'a'로, 1번 인덱스를 'd'로 변경합니다. 결과: "ad".
 *    - "ad"에서 "ad"는 서브시퀀스입니다.
 * 3. 예제 #3:
 *    - 어떤 작업을 수행해도 "d"를 "ab"의 서브시퀀스로 만들 수 없습니다.
 */

function solution(str1, str2) {
    let j = 0; // str2의 현재 인덱스

    for (let i = 0; i < str1.length; i++) {
        if (j >= str2.length) break; // str2를 이미 만족한 경우 종료

        // 같은 문자인 경우
        if (str1[i] === str2[j]) {
            j++;
        } 
        // 순환 증가로 문자를 맞출 수 있는 경우
        else if (
            (str1[i] === 'z' && str2[j] === 'a') || 
            (str1[i].charCodeAt(0) + 1 === str2[j].charCodeAt(0))
        ) {
            j++;
        }
    }

    // str2의 모든 문자가 매칭된 경우 true 반환
    return j === str2.length;
}

// 입출력 예시 테스트
console.log(solution("abc", "ad")); // 기대 값: true
console.log(solution("zc", "ad")); // 기대 값: true
console.log(solution("ab", "d")); // 기대 값: false

/**
 * 시간 복잡도:
 * O(n), 
 * - n: str1.length
 * - str1을 한 번 순회하며 str2를 확인
 * 
 * 공간 복잡도:
 * O(1), 
 * - 추가적인 데이터 구조를 사용하지 않음
 */

/**
 * 개선할 점:
 * - 현재 구현은 효율적이며 최적화가 더 이상 필요하지 않습니다.
 */
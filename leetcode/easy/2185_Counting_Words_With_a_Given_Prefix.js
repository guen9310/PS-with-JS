// 문제 유형: [문자열 탐색 문제, 배열 처리 문제 등...]
/**
 * 문제 설명:
 * 주어진 문자열 배열 `words`에서 `pref`를 접두사로 포함하는 문자열의 개수를 반환합니다.
 * 접두사란 문자열 s의 선두에 위치한 연속적인 부분 문자열을 의미합니다.
 * 
 * 제한 사항:
 * 1. 1 <= words.length <= 100
 * 2. 1 <= words[i].length, pref.length <= 100
 * 3. words[i]와 pref는 소문자 영어 문자로만 구성됩니다.
 * 
 * 입출력 예:
 * words = ["pay","attention","practice","attend"], pref = "at" -> return 2
 * words = ["leetcode","win","loops","success"], pref = "code" -> return 0
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: "attention"과 "attend"가 `pref` "at"를 접두사로 포함합니다.
 * 2. 예제 #2: `pref` "code"를 접두사로 포함하는 문자열이 없습니다.
 */

function solution(words, pref) {
    return words.filter(word => word.startsWith(pref)).length;
}

// 입출력 예시 테스트
console.log(solution(["pay", "attention", "practice", "attend"], "at")); // 기대 값: 2
console.log(solution(["leetcode", "win", "loops", "success"], "code")); // 기대 값: 0

/**
 * 시간 복잡도:
 * O(n * m) - n은 words 배열의 길이, m은 pref의 길이. 각 단어에 대해 접두사를 확인하기 때문.
 * 
 * 공간 복잡도:
 * O(n) - filter에 의해 생성되는 새로운 배열의 크기.
 */

/**
 * 개선할 점:
 * - `filter` 대신 명시적인 반복문을 사용하여 추가 메모리 사용을 줄일 수 있음.
 */

// 개선된 답변
function solutionImproved(words, pref) {
    let count = 0;
    for (const word of words) {
        if (word.startsWith(pref)) count++;
    }
    return count;
}

/** 
 * 개선된 시간 복잡도:
 * O(n * m) - 시간 복잡도는 동일.
 * 
 * 개선된 공간 복잡도:
 * O(1) - 추가 배열을 생성하지 않음.
 */
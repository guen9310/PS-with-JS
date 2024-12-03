// 문제 유형: 문자열 처리 문제

/**
 * 문제 설명:
 * 문자열 `s`와 문자열 배열 `words`가 주어집니다. 
 * `s`가 `words`의 첫 번째 k개의 문자열을 이어붙여 만들 수 있는 접두사 문자열인지 확인하세요.
 * `k`는 1 이상, `words.length` 이하의 값입니다.
 * 
 * 제한 사항:
 * 1. 1 <= words.length <= 100
 * 2. 1 <= words[i].length <= 20
 * 3. 1 <= s.length <= 1000
 * 4. words[i]와 s는 소문자로만 이루어져 있습니다.
 * 
 * 입출력 예:
 * s = "iloveleetcode", words = ["i","love","leetcode","apples"] -> return true
 * s = "iloveleetcode", words = ["apples","i","love","leetcode"] -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: `s`는 "i", "love", "leetcode"를 이어붙여 만들 수 있으므로 true입니다.
 * 2. 예제 #2: `s`는 `words`의 접두사로 만들 수 없으므로 false입니다.
 */

function solution(s, words) {
    let index = 0; // 현재 s의 인덱스
    let current = ''; // 현재까지 이어붙인 문자열

    for (let word of words) {
        if (s.slice(index).startsWith(word)) {
            index += word.length;
            current += word;
            if (current === s) {
                return true; // s와 완전히 일치하면 true 반환
            }
            continue;
        } else {
            return false; // 조건에 맞지 않으면 false 반환
        }
    }

    return false; // 모든 문자열을 확인했지만 s를 만들 수 없는 경우
}

// 입출력 예시 테스트
console.log(solution("iloveleetcode", ["i", "love", "leetcode", "apples"])); // 기대 값: true
console.log(solution("iloveleetcode", ["apples", "i", "love", "leetcode"])); // 기대 값: false

/**
 * 시간 복잡도:
 * O(n + m), 
 * - n: words 배열의 길이
 * - m: s의 길이
 * 
 * 공간 복잡도:
 * O(m)
 * - s의 현재 상태를 추적하는 데 사용하는 변수 크기
 */

/**
 * 개선할 점:
 * 현재 로직은 간단하지만 문자열을 반복적으로 잘라 비교하므로 효율성이 떨어질 수 있습니다.
 * 효율성을 높이기 위해 s를 계속해서 부분적으로 자르기보다, 문자열 비교를 누적하여 계산할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(s, words) {
    let current = ''; // 현재까지 이어붙인 문자열

    for (let word of words) {
        current += word;
        if (current === s) {
            return true; // s와 일치하면 true 반환
        } else if (current.length > s.length) {
            return false; // 길이가 초과되면 false 반환
        }
    }

    return false; // 모든 문자열을 확인했지만 s를 만들 수 없는 경우
}

/**
 * 개선된 시간 복잡도:
 * O(n + m)
 * - n: words 배열의 길이
 * - m: s의 길이
 * 
 * 개선된 공간 복잡도:
 * O(1)
 * - 문자열 누적 비교만 수행하므로 추가적인 공간 사용 없음
 */
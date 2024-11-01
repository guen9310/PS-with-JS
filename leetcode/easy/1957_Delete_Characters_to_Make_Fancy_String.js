// 문제 유형: 스택, 문자열 처리 문제
/**
 * 문제 설명:
 * Fancy 문자열은 연속된 세 문자가 같은 경우가 없는 문자열을 의미합니다.
 * 주어진 문자열 `s`에서 최소한의 문자를 삭제하여 Fancy 문자열로 만들어야 합니다.
 * 삭제 후의 최종 Fancy 문자열을 반환합니다. (정답은 항상 유일함이 보장됩니다.)
 * 
 * 제한 사항:
 * 1. 문자열 `s`의 길이는 1 이상 10^5 이하입니다.
 * 2. `s`는 소문자 알파벳으로만 구성됩니다.
 * 
 * 입출력 예:
 * s = "leeetcode" -> return "leetcode"
 * s = "aaabaaaa" -> return "aabaa"
 * s = "aab" -> return "aab"
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 첫 번째 'e' 그룹에서 'e' 하나를 제거하여 "leetcode"로 만듭니다.
 * 2. 예제 #2: 첫 번째 'a' 그룹에서 'a' 하나를 제거하고, 두 번째 'a' 그룹에서 'a' 두 개를 제거하여 "aabaa"를 만듭니다.
 * 3. 예제 #3: 이미 연속된 세 문자가 없으므로 문자열 "aab"를 그대로 반환합니다.
 */

function makeFancyString(s) {
    let stack = [];
    for (let c of s) {
        // 스택의 끝에 있는 두 문자가 현재 문자와 같으면 추가하지 않음
        if (stack.length >= 2 && stack[stack.length - 1] === c && stack[stack.length - 2] === c) {
            continue;
        }
        stack.push(c); // 조건을 만족하는 경우에만 문자 추가
    }
    return stack.join(''); // 스택에 저장된 문자들을 문자열로 변환하여 반환
}

// 입출력 예시 테스트
console.log(makeFancyString("leeetcode")); // 기대 값: "leetcode"
console.log(makeFancyString("aaabaaaa"));   // 기대 값: "aabaa"
console.log(makeFancyString("aab"));        // 기대 값: "aab"

/**
 * 시간 복잡도:
 * O(n) - 문자열을 한 번 순회하며, 스택에 문자를 추가 또는 생략하기 때문에 O(n)의 시간 복잡도를 가집니다.
 * 
 * 공간 복잡도:
 * O(n) - 결과를 저장하기 위해 스택을 사용하여 O(n)의 공간 복잡도를 가집니다.
 */

/**
 * 개선할 점:
 * - 현재 구현은 스택을 사용하여 간결하고 효율적입니다.
 * - 추가적인 최적화는 필요하지 않으며, 문제의 요구 조건을 만족합니다.
 */
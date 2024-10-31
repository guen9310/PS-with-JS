// 문제 유형: [문자열 처리 문제]
/**
 * 문제 설명:
 * 주어진 문자열 `s`는 단어와 공백으로 구성되어 있으며, 마지막 단어의 길이를 반환하는 문제입니다.
 * 여기서 단어는 공백이 아닌 문자로 이루어진 최대 길이의 부분 문자열입니다.
 * 
 * 제한 사항:
 * 1. 문자열 `s`의 길이는 1 이상 10^4 이하입니다.
 * 2. `s`는 영문자와 공백(' ')으로만 구성되어 있습니다.
 * 3. `s`에는 최소 하나의 단어가 존재합니다.
 * 
 * 입출력 예:
 * s = "Hello World" -> return 5
 * s = "   fly me   to   the moon  " -> return 4
 * s = "luffy is still joyboy" -> return 6
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: "Hello World"에서 마지막 단어는 "World"이며, 길이는 5입니다.
 * 2. 예제 #2: "   fly me   to   the moon  "에서 마지막 단어는 "moon"이며, 길이는 4입니다.
 * 3. 예제 #3: "luffy is still joyboy"에서 마지막 단어는 "joyboy"이며, 길이는 6입니다.
 */

function solution(s) {
    const split = s.trim().split(' ');
    return split[split.length - 1].length;
}

// 입출력 예시 테스트
console.log(solution("Hello World")); // 기대 값: 5
console.log(solution("   fly me   to   the moon  ")); // 기대 값: 4
console.log(solution("luffy is still joyboy")); // 기대 값: 6

/**
 * 시간 복잡도: O(n)
 * - 문자열 `s`의 길이에 비례하여 문자열을 분리하고 마지막 단어의 길이를 계산합니다.
 * 
 * 공간 복잡도: O(n)
 * - 공백으로 분리된 단어 배열을 저장하기 위한 추가 공간이 필요합니다.
 */

/**
 * 개선할 점:
 * - 주어진 문자열에서 마지막 단어를 탐색하는 최적화가 가능합니다.
 *   문자열을 뒤에서부터 탐색하면 `split`을 사용하지 않고도 마지막 단어의 길이를 계산할 수 있습니다.
 */

// 개선된 답변 (뒤에서부터 탐색)
function solutionImproved(s) {
    let length = 0;
    let foundWord = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
            foundWord = true;
        } else if (foundWord) {
            break;
        }
    }
    return length;
}

/** 
 * 개선된 시간 복잡도: O(n)
 * - 문자열을 뒤에서부터 한 번만 탐색하므로 효율성이 높아집니다.
 * 
 * 개선된 공간 복잡도: O(1)
 * - 추가 배열 없이, 필요한 변수만으로 마지막 단어의 길이를 계산합니다.
 */
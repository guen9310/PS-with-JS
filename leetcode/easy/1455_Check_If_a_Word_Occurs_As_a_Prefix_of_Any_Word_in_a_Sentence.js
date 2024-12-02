// 문제 유형: [탐욕법 문제, 문자열 탐색 문제 등...]

/**
 * 문제 설명:
 * 주어진 문장은 공백으로 구분된 여러 단어들로 구성되어 있으며, searchWord가 주어집니다.
 * searchWord가 문장의 단어 중 하나의 접두사(prefix)인 경우, 해당 단어의 인덱스(1부터 시작)를 반환합니다.
 * searchWord가 접두사인 단어가 여러 개인 경우, 가장 앞에 있는 단어의 인덱스를 반환합니다.
 * searchWord가 접두사인 단어가 없을 경우, -1을 반환합니다.
 * 
 * 제한 사항:
 * 1. 1 <= sentence.length <= 100
 * 2. 1 <= searchWord.length <= 10
 * 3. sentence는 소문자 영어 문자와 공백으로만 구성됩니다.
 * 4. searchWord는 소문자 영어 문자로만 구성됩니다.
 * 
 * 입출력 예:
 * sentence = "i love eating burger", searchWord = "burg" -> return 4
 * sentence = "this problem is an easy problem", searchWord = "pro" -> return 2
 * sentence = "i am tired", searchWord = "you" -> return -1
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: "burger" 단어가 searchWord "burg"를 접두사로 가지며, 이는 문장에서 4번째 단어입니다.
 * 2. 예제 #2: "problem" 단어가 searchWord "pro"를 접두사로 가지며, 이는 문장에서 2번째 단어입니다.
 * 3. 예제 #3: "you"는 어떠한 단어의 접두사도 아니므로, -1을 반환합니다.
 */

function solution(sentence, searchWord) {
    const words = sentence.split(' ');
    const index = words.findIndex(word => word.startsWith(searchWord));
    return index >= 0 ? index + 1 : -1;
}

// 입출력 예시 테스트
console.log(solution("i love eating burger", "burg")); // 기대 값: 4
console.log(solution("this problem is an easy problem", "pro")); // 기대 값: 2
console.log(solution("i am tired", "you")); // 기대 값: -1

/**
 * 시간 복잡도:
 * O(n * m) - n은 단어 개수, m은 searchWord의 길이. 각 단어에 대해 접두사를 확인하기 때문.
 * 
 * 공간 복잡도:
 * O(n) - 문장을 단어 배열로 나누는 데 사용되는 공간.
 */

/**
 * 개선할 점:
 * - `findIndex` 대신 `for`문으로 단순화하면 약간의 성능 향상을 기대할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(sentence, searchWord) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) return i + 1;
    }
    return -1;
}

/** 
 * 개선된 시간 복잡도:
 * O(n * m) - 시간 복잡도는 동일하지만, `findIndex`의 내부 반복 대신 명시적 반복문으로 동작.
 * 
 * 개선된 공간 복잡도:
 * O(n) - 동일한 단어 배열을 사용.
 */
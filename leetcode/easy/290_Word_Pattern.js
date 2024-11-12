// 문제 유형: [해시 맵 문제]
/**
 * 문제 설명:
 * 주어진 패턴과 문자열 s가 동일한 패턴을 따르는지 확인하는 문제입니다. 패턴이 동일하다는 의미는,
 * 패턴의 각 문자가 s의 단어와 일대일 대응을 이루며, 두 문자 또는 두 단어가 서로 중복 매핑되지 않는다는 것을 의미합니다.
 * 
 * 제한 사항:
 * 1. 1 <= pattern.length <= 300
 * 2. pattern은 소문자 영문자로만 구성됩니다.
 * 3. 1 <= s.length <= 3000
 * 4. s는 소문자 영문자와 공백(' ')으로 구성되며, 각 단어는 하나의 공백으로 구분됩니다.
 * 5. s에는 선행 또는 후행 공백이 없습니다.
 * 
 * 입출력 예:
 * pattern = "abba", s = "dog cat cat dog" -> return true
 * pattern = "abba", s = "dog cat cat fish" -> return false
 * pattern = "aaaa", s = "dog cat cat dog" -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 'a'는 "dog"에, 'b'는 "cat"에 매핑됩니다. 모든 문자가 일관되게 매핑되어 패턴을 따릅니다.
 * 2. 예제 #2: 'a'는 "dog"에, 'b'는 "cat"에 매핑되지만, 'b'가 "fish"에 매핑되어 일관되지 않으므로 false를 반환합니다.
 * 3. 예제 #3: 'a'가 "dog"와 "cat" 두 가지에 매핑되므로 패턴을 따르지 않아 false를 반환합니다.
 */

function solution(pattern, s) {
    const mapCharToWord = new Map();
    const mapWordToChar = new Map();
    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!mapCharToWord.has(char)) {
            mapCharToWord.set(char, word);
        } else if (mapCharToWord.get(char) !== word) {
            return false;
        }

        if (!mapWordToChar.has(word)) {
            mapWordToChar.set(word, char);
        } else if (mapWordToChar.get(word) !== char) {
            return false;
        }
    }

    return true;
}

// 입출력 예시 테스트
console.log(solution("abba", "dog cat cat dog")); // 기대 값: true
console.log(solution("abba", "dog cat cat fish")); // 기대 값: false
console.log(solution("aaaa", "dog cat cat dog")); // 기대 값: false

/**
 * 시간 복잡도:
 * O(n) - 패턴의 문자와 문자열 s의 단어를 각각 한 번씩 순회하기 때문에 선형 시간 복잡도를 가집니다.
 * 
 * 공간 복잡도:
 * O(m) - 각 문자를 매핑하기 위한 두 개의 맵을 사용하며, m은 패턴 또는 s에 포함된 단어의 수를 나타냅니다.
 */

/**
 * 개선할 점:
 * 현재 로직은 문제 요구사항을 충족하며 효율적으로 작동합니다. 특별히 개선할 필요가 없습니다.
 */
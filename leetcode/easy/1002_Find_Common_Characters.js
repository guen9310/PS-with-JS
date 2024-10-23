/**
 * 문제 설명:
 * 주어진 문자열 배열에서 모든 문자열에 공통으로 나타나는 문자를 반환하는 문제입니다.
 * 공통 문자는 중복을 허용하며, 순서는 상관없이 반환됩니다.
 * 
 * 제한 사항:
 * 1. 각 문자열의 길이는 1 이상 100 이하입니다.
 * 2. 배열의 길이는 1 이상 100 이하입니다.
 * 3. 모든 문자열은 소문자로만 이루어져 있습니다.
 * 
 * 입출력 예:
 * words = ["bella", "label", "roller"] -> return ["e", "l", "l"]
 * words = ["cool", "lock", "cook"] -> return ["c", "o"]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 
 *  - "bella", "label", "roller"에서 공통으로 나타나는 문자는 "e", "l", "l" 입니다.
 * 2. 예제 #2: 
 *  - "cool", "lock", "cook"에서 공통으로 나타나는 문자는 "c", "o" 입니다.
 */

function solution(words) {
    let word = words[0].split('');
    const result = [];

    for (let char of word) {
        let isCommon = true;

        for (let i = 1; i < words.length; i++) {
            if (words[i].includes(char)) {
                words[i] = words[i].replace(char, '');
            } else {
                isCommon = false;
                break;
            }
        }
        if (isCommon) {
            result.push(char);
        }
    }
    return result;
};

// 입출력 예시 테스트
console.log(solution(["bella", "label", "roller"])); // 기대 값: ["e", "l", "l"]
console.log(solution(["cool", "lock", "cook"])); // 기대 값: ["c", "o"]

/**
 * 시간 복잡도:
 * O(n * m) 
 * - n은 첫 번째 문자열의 길이, m은 나머지 문자열의 평균 길이입니다.
 * 
 * 공간 복잡도:
 * O(n)
 * - 결과를 저장하는 배열과 변형된 문자열 배열에 대한 공간이 필요합니다.
 */

/**
 * 개선할 점:
 * - 문자열마다 replace를 사용하는 것 대신, 각 문자의 출현 횟수를 기록하여 최솟값을 취하는 방식으로 개선할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(words) {
    let common = Array(26).fill(Infinity); 

    for (let word of words) {
        let count = Array(26).fill(0);
        for (let char of word) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            common[i] = Math.min(common[i], count[i]);
        }
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        while (common[i]-- > 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }

    return result;
};

/** 
 * 개선된 시간 복잡도:
 * O(n * m) 
 * - n은 단어의 수, m은 각 단어의 평균 길이입니다.
 * 
 * 개선된 공간 복잡도:
 * O(1)
 * - 고정된 크기의 배열만 사용하므로 공간 복잡도는 상수로 유지됩니다.
 */
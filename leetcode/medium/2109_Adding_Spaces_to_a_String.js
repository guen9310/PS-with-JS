// 문제 유형: 문자열 처리 문제

/**
 * 문제 설명:
 * 주어진 문자열 `s`와 정수 배열 `spaces`가 주어집니다. 
 * `spaces`에 명시된 인덱스에 따라 문자열에 공백을 추가하여 수정된 문자열을 반환하세요. 
 * 각 공백은 주어진 인덱스의 문자 앞에 추가됩니다.
 * 
 * 제한 사항:
 * 1. 1 <= s.length <= 3 * 10^5
 * 2. spaces.length == k
 * 3. 1 <= k <= 3 * 10^4
 * 4. 0 <= spaces[i] < s.length
 * 5. spaces는 정렬된 상태입니다.
 * 
 * 입출력 예:
 * s = "LeetcodeHelpsMeLearn", spaces = [8,13,15] -> return "Leetcode Helps Me Learn"
 * s = "icodeinpython", spaces = [1,5,7,9] -> return "i code in py thon"
 * s = "spacing", spaces = [0,1,2,3,4,5,6] -> return " s p a c i n g"
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 인덱스 8, 13, 15 앞에 공백이 추가되어 결과 문자열은 "Leetcode Helps Me Learn"입니다.
 * 2. 예제 #2: 인덱스 1, 5, 7, 9 앞에 공백이 추가되어 결과 문자열은 "i code in py thon"입니다.
 * 3. 예제 #3: 모든 문자 앞에 공백이 추가되어 결과 문자열은 " s p a c i n g"입니다.
 */

function solution(s, spaces) {
    let str = [];
    let index = 0;

    for (let space of spaces) {
        const word = s.slice(index, space);
        index = space; 
        str.push(word);
    }
    str.push(s.slice(index));

    return str.join(' ');
}

// 입출력 예시 테스트
console.log(solution("LeetcodeHelpsMeLearn", [8, 13, 15])); // 기대 값: "Leetcode Helps Me Learn"
console.log(solution("icodeinpython", [1, 5, 7, 9])); // 기대 값: "i code in py thon"
console.log(solution("spacing", [0, 1, 2, 3, 4, 5, 6])); // 기대 값: " s p a c i n g"

/**
 * 시간 복잡도:
 * O(n), 
 * - n: 문자열 `s`의 길이
 * - 문자열의 각 부분을 잘라서 처리하고 배열에 추가하는 작업 수행
 * 
 * 공간 복잡도:
 * O(n + k), 
 * - n: 결과 문자열의 길이
 * - k: spaces 배열 크기
 */

/**
 * 개선할 점:
 * - 현재 구현은 간단하고 효율적이나, `slice`와 배열 조작에 추가적인 메모리가 사용됩니다. 
 * - 메모리 사용량을 줄이기 위해 문자열을 직접 조작하거나 결과를 한 번에 생성하는 방식도 고려할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(s, spaces) {
    let result = ''; // 결과 문자열 저장
    let prevIndex = 0; // 이전 구간의 끝 인덱스

    for (let space of spaces) {
        result += s.slice(prevIndex, space) + ' '; // 현재 구간과 공백 추가
        prevIndex = space; // 구간 끝 업데이트
    }
    result += s.slice(prevIndex); // 마지막 구간 추가

    return result; // 최종 결과 반환
}

/**
 * 개선된 시간 복잡도:
 * O(n), 
 * - n: 문자열 `s`의 길이
 * 
 * 개선된 공간 복잡도:
 * O(n), 
 * - 추가 배열 없이 결과 문자열만 생성
 */
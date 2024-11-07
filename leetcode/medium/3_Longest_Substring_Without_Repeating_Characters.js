// 문제 유형: [슬라이딩 윈도우 문제, 해시맵 문제]

/**
 * 문제 설명:
 * 주어진 문자열 s에서 중복되지 않은 가장 긴 부분 문자열의 길이를 찾는 문제입니다.
 * 부분 문자열은 연속된 문자들로 구성되어야 하며, 중복된 문자가 포함되지 않아야 합니다.
 * 
 * 제한 사항:
 * 1. 0 <= s.length <= 5 * 10^4
 * 2. s는 영어 대소문자, 숫자, 기호, 공백으로 구성됩니다.
 * 
 * 입출력 예:
 * s = "abcabcbb" -> return 3
 * s = "bbbbb" -> return 1
 * s = "pwwkew" -> return 3
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 문자열 "abcabcbb"에서 "abc"가 중복 없이 가장 긴 부분 문자열이며 길이는 3입니다.
 * 2. 예제 #2: 문자열 "bbbbb"에서 중복되지 않은 가장 긴 부분 문자열은 "b"로 길이는 1입니다.
 * 3. 예제 #3: 문자열 "pwwkew"에서 "wke"가 중복 없이 가장 긴 부분 문자열이며 길이는 3입니다.
 */

function solution(s) {
    let max = 0;
    let left = 0;
    let map = new Map();
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }
        
        map.set(char, right);
        max = Math.max(max, right - left + 1);
    }
    return max;
}

// 입출력 예시 테스트
// console.log(lengthOfLongestSubstring("abcabcbb")); // 기대 값: 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // 기대 값: 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // 기대 값: 3

/**
 * 시간 복잡도: O(n) - n은 문자열 s의 길이입니다. 슬라이딩 윈도우 기법으로 문자열을 한 번만 탐색합니다.
 * 
 * 공간 복잡도: O(min(n, m)) - n은 문자열 s의 길이, m은 가능한 고유 문자 집합의 크기입니다. Map을 사용하여 문자 위치를 저장합니다.
 */

/**
 * 개선할 점:
 * 현재 로직은 최적화되어 있으며, 슬라이딩 윈도우와 해시맵을 사용하여 최적의 시간 복잡도를 유지하고 있습니다.
 * 추가적인 개선은 필요하지 않습니다.
 */
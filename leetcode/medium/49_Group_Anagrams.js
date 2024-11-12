// 문제 유형: [해시 맵 문제]
/**
 * 문제 설명:
 * 주어진 문자열 배열에서 애너그램(anagram) 그룹을 찾는 문제입니다. 애너그램이란 문자를 재배열하여 동일한 구성을 가질 수 있는 단어를 의미합니다.
 * 각 애너그램 그룹을 묶어 반환합니다. 반환 순서는 상관없습니다.
 * 
 * 제한 사항:
 * 1. 1 <= strs.length <= 10^4
 * 2. 0 <= strs[i].length <= 100
 * 3. strs[i]는 소문자 영어 알파벳으로만 구성됩니다.
 * 
 * 입출력 예:
 * strs = ["eat","tea","tan","ate","nat","bat"] -> return [["bat"],["nat","tan"],["ate","eat","tea"]]
 * strs = [""] -> return [[""]]
 * strs = ["a"] -> return [["a"]]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: "nat"과 "tan"은 서로 애너그램이며, "ate", "eat", "tea"는 서로 애너그램입니다. "bat"은 독립적인 애너그램 그룹으로 존재합니다.
 * 2. 예제 #2: 빈 문자열도 하나의 그룹으로 반환됩니다.
 * 3. 예제 #3: 단일 문자 "a"는 자체로 하나의 그룹을 형성합니다.
 */

function solution(strs) {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = [...str].sort().join(''); // 각 문자열을 정렬하여 애너그램의 기준으로 사용
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

// 입출력 예시 테스트
console.log(solution(["eat","tea","tan","ate","nat","bat"])); // 기대 값: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(solution([""])); // 기대 값: [[""]]
console.log(solution(["a"])); // 기대 값: [["a"]]

/**
 * 시간 복잡도:
 * O(n * k log k) - 문자열의 개수를 n, 각 문자열의 길이를 k라고 할 때, 각 문자열을 정렬하는 데 O(k log k)의 시간이 소요되므로 전체 시간 복잡도는 O(n * k log k)입니다.
 * 
 * 공간 복잡도:
 * O(n * k) - 해시 맵에 문자열 그룹을 저장하므로, 총 저장 공간은 O(n * k)입니다.
 */

/**
 * 개선할 점:
 * - 문자열을 정렬하지 않고, 각 문자의 개수를 세어 고유한 키를 만들 수 있는 방식으로 개선할 수 있습니다. 이는 k log k 복잡도를 줄이는 데 도움을 줄 수 있습니다.
 */

// 개선된 답변
function solutionImproved(strs) {
    const map = new Map();

    for (let str of strs) {
        const count = Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++; // 각 문자의 빈도수를 배열로 기록
        }
        const key = count.join('#'); // 빈도수 배열을 고유 키로 사용
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

/** 
 * 개선된 시간 복잡도:
 * O(n * k) - 각 문자열의 길이를 k라고 할 때, 개선된 솔루션은 정렬을 사용하지 않고 각 문자의 빈도수를 배열로 만들어 비교하므로 O(k)에 가까운 복잡도를 가집니다.
 * 
 * 개선된 공간 복잡도:
 * O(n * k) - 저장 공간은 동일하게 O(n * k)입니다.
 */
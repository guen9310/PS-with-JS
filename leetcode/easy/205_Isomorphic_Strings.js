// 문제 유형: 해시맵을 활용한 문자열 비교 문제
/**
 * 문제 설명:
 * 두 문자열 s와 t가 주어졌을 때, 두 문자열이 동일한 순서의 문자 치환을 통해 서로 변환 가능한지를 확인하는 문제입니다.
 * 문자열 s의 각 문자를 다른 문자로 바꿔서 문자열 t를 얻을 수 있는 경우 두 문자열은 동형(isomorphic)입니다.
 * 각 문자는 특정한 문자로만 치환될 수 있으며, 동일한 문자가 다른 문자로 바뀌거나 다른 문자가 동일한 문자로 바뀔 수는 없습니다.
 * 
 * 제한 사항:
 * 1. s와 t의 길이는 같습니다.
 * 2. 문자열 s와 t는 소문자로만 구성됩니다.
 * 
 * 입출력 예:
 * s = "egg", t = "add" -> return true
 * s = "foo", t = "bar" -> return false
 * s = "paper", t = "title" -> return true
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 'e'는 'a'로, 'g'는 'd'로 치환하여 두 문자열을 동일하게 만들 수 있습니다.
 * 2. 예제 #2: 'o'가 두 번 나오는 문제로 인해 'a'와 'r'로 매핑할 수 없어 변환이 불가능합니다.
 * 3. 예제 #3: 'p'는 't', 'a'는 'i', 'e'는 'l', 'r'는 'e'로 매핑하여 두 문자열을 동일하게 만들 수 있습니다.
 */

function solution(s, t) {
    if (s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (!sMap.has(sChar)) {
            sMap.set(sChar, tChar);
        }

        if (!tMap.has(tChar)) {
            tMap.set(tChar, sChar);
        }

        if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar) {
            return false;
        }
    }

    return true;
}

// 입출력 예시 테스트
console.log(solution("egg", "add")); // 기대 값: true
console.log(solution("foo", "bar")); // 기대 값: false
console.log(solution("paper", "title")); // 기대 값: true

/**
 * 시간 복잡도:
 * O(n), 문자열의 길이 n에 대해 단일 루프를 사용하여 n번만 반복합니다.
 * 
 * 공간 복잡도:
 * O(n), 두 개의 맵에 각각 최대 n개의 키-값 쌍이 저장될 수 있습니다.
 */

/**
 * 개선할 점:
 * 현재 로직에서 개선할 필요는 크지 않으나, 문자열이 아주 긴 경우 해시맵 대신 배열을 활용하여 성능을 높일 수 있는 가능성을 고려할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(s, t) {
    if (s.length !== t.length) return false;

    const sMap = Array(128).fill(-1); // ASCII 코드 기반 배열 초기화
    const tMap = Array(128).fill(-1); // ASCII 코드 기반 배열 초기화

    for (let i = 0; i < s.length; i++) {
        const sChar = s.charCodeAt(i);
        const tChar = t.charCodeAt(i);

        if (sMap[sChar] === -1 && tMap[tChar] === -1) {
            sMap[sChar] = tChar;
            tMap[tChar] = sChar;
        } else if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
            return false;
        }
    }

    return true;
}

/** 
 * 개선된 시간 복잡도:
 * O(n), 문자열의 길이 n에 대해 단일 루프를 사용하여 n번만 반복합니다.
 * 
 * 개선된 공간 복잡도:
 * O(1), ASCII 기반 배열을 사용하여 추가 공간 복잡도를 줄였습니다.
 */
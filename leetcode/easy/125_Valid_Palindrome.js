// 문제 유형: [투 포인터 문제]

/**
 * 문제 설명:
 * 주어진 문자열 s가 주어졌을 때, 대문자를 소문자로 변환하고 모든 비알파벳 문자를 제거한 후 남은 문자열이 앞에서 읽으나 뒤에서 읽으나 같은지 확인하는 문제입니다.
 * 문자열이 좌우 대칭일 경우 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 * 
 * 제한 사항:
 * 1. 문자열 s의 길이는 1 이상 2 * 10^5 이하입니다.
 * 2. 문자열 s는 ASCII 문자로만 구성됩니다.
 * 
 * 입출력 예:
 * s = "A man, a plan, a canal: Panama" -> return true
 * s = "race a car" -> return false
 * s = " " -> return true
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: s = "A man, a plan, a canal: Panama" -> 알파벳과 숫자만 남긴 후 "amanaplanacanalpanama"가 되어 좌우 대칭이므로 true를 반환합니다.
 * 2. 예제 #2: s = "race a car" -> 알파벳과 숫자만 남긴 후 "raceacar"가 되어 좌우 대칭이 아니므로 false를 반환합니다.
 * 3. 예제 #3: s = " " -> 모든 비알파벳 문자를 제거하면 빈 문자열이 되고, 빈 문자열은 좌우 대칭으로 간주되므로 true를 반환합니다.
 */

function solution(s) {
    const result = [...s].filter(d => {
        const code = d.toLowerCase().charCodeAt(0);
        return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
    }).map(d => d.toLowerCase());

    let start = 0;
    let end = result.length - 1;
    while (start < end) {
        if (result[start] !== result[end]) return false;
        start++;
        end--;
    }
    return true;
}

// 입출력 예시 테스트
console.log(solution("A man, a plan, a canal: Panama")); // 기대 값: true
console.log(solution("race a car"));                      // 기대 값: false
console.log(solution(" "));                               // 기대 값: true


/**
 * 시간 복잡도:
 * O(n) - 문자열의 길이에 비례하여 순회하며 필터링 및 투 포인터 검사를 수행합니다.
 * 
 * 공간 복잡도:
 * O(n) - 알파벳과 숫자를 저장하는 배열을 추가적으로 사용하므로 O(n) 공간 복잡도를 가집니다.
 */

/**
 * 개선할 점:
 * 현재 구현은 추가 배열을 사용하여 메모리를 더 많이 소모합니다. 이를 개선하기 위해 양쪽 끝에서 동시에 알파벳과 숫자만 비교하는 방법으로 메모리 사용을 줄일 수 있습니다.
 */

// 개선된 답변
function solutionImproved(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        // start가 알파벳 또는 숫자가 될 때까지 증가
        while (start < end && !isAlphanumeric(s[start])) start++;
        // end가 알파벳 또는 숫자가 될 때까지 감소
        while (start < end && !isAlphanumeric(s[end])) end--;
        
        // 서로 다른 경우 false 반환
        if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
        
        // 양쪽 포인터 이동
        start++;
        end--;
    }
    
    return true;
}

// 알파벳 및 숫자인지 확인하는 함수
function isAlphanumeric(char) {
    const code = char.toLowerCase().charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}

/** 
 * 개선된 시간 복잡도:
 * O(n) - 문자열의 길이에 비례하여 각 문자를 한 번씩 검사하므로 O(n) 시간 복잡도를 가집니다.
 * 
 * 개선된 공간 복잡도:
 * O(1) - 추가 배열을 생성하지 않으므로 상수 공간 복잡도를 가집니다.
 */
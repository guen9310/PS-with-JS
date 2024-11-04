// 문제 유형: [문자열 변환 문제, 지그재그 패턴 문제]
/**
 * 문제 설명:
 * 주어진 문자열 `s`를 지정된 `numRows`의 지그재그 패턴으로 배치한 후, 해당 패턴을 행별로 읽어 반환하는 함수입니다. 
 * 예를 들어, `numRows`가 3일 때 "PAYPALISHIRING"는 다음과 같은 형태로 배치됩니다:
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 결과 문자열은 "PAHNAPLSIIGYIR"입니다.
 * 
 * 제한 사항:
 * 1. `s`의 길이는 1 이상 1000 이하입니다.
 * 2. `s`는 영어 대문자와 소문자, `,`, `.`으로 구성됩니다.
 * 3. `numRows`는 1 이상 1000 이하입니다.
 * 4. `numRows`가 1인 경우, 변환 없이 원본 문자열을 반환합니다.
 * 
 * 입출력 예:
 * s = "PAYPALISHIRING", numRows = 3 -> return "PAHNAPLSIIGYIR"
 * s = "PAYPALISHIRING", numRows = 4 -> return "PINALSIGYAHRPI"
 * s = "A", numRows = 1 -> return "A"
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 문자열 "PAYPALISHIRING"를 3개의 행에 배치한 후, 각 행을 순서대로 읽어 결과를 반환합니다.
 * 2. 예제 #2: "PAYPALISHIRING"를 4개의 행에 배치하면, 결과는 "PINALSIGYAHRPI"가 됩니다.
 * 3. 예제 #3: 단일 문자의 경우 행이 하나이므로 변환 없이 "A"를 반환합니다.
 */

function solution(s, numRows) {
    if (numRows === 1) return s;
    
    const rows = Array.from({ length: numRows }, () => "");
    let count = 0;
    let going = false;
    
    for(let c of s) {
        rows[count] += c;
        if (count === 0 || count === numRows - 1) going = !going;
        going ? count++ : count--;
    }
    
    return rows.join("");
}

// 입출력 예시 테스트
console.log(solution("PAYPALISHIRING", 3)); // 기대 값: "PAHNAPLSIIGYIR"
console.log(solution("PAYPALISHIRING", 4)); // 기대 값: "PINALSIGYAHRPI"
console.log(solution("A", 1)); // 기대 값: "A"

/**
 * 시간 복잡도:
 * O(n) - 문자열 `s`의 각 문자를 한 번씩 순회하기 때문에 선형 시간 복잡도를 가집니다.
 * 
 * 공간 복잡도:
 * O(n) - 결과를 저장하기 위한 `rows` 배열의 각 요소는 최대 `s.length`만큼 메모리를 사용합니다.
 */

/**
 * 개선할 점:
 * 현재 로직은 각 문자를 순회하여 지그재그 패턴에 따라 행을 배치하는 방식으로 동작합니다. 
 * 이 문제의 요구사항을 충분히 만족하므로 추가적인 개선이 필요하지 않습니다.
 */

// 문제 유형: [문자열 처리 문제, 반복 제거 문제]
/**
 * 문제 설명:
 * 주어진 문자열 `s`에서 "AB" 또는 "CD"라는 서브스트링을 제거하는 연산을 반복할 수 있습니다.
 * 문자열에서 가능한 연산을 모두 적용한 후, 가장 짧은 문자열의 길이를 반환하세요.
 * 문자열에서 서브스트링을 제거할 때, 새롭게 "AB"나 "CD"가 생성될 수 있음을 고려해야 합니다.
 * 
 * 제한 사항:
 * 1. 문자열 `s`는 대문자 알파벳으로만 이루어져 있습니다.
 * 2. 문자열 `s`의 길이는 1 이상 100,000 이하입니다.
 * 3. 문자열에서 제거할 수 없는 경우 그대로 반환합니다.
 * 
 * 입출력 예:
 * s = "ABFCACDB" -> return 2
 * s = "ACBBD" -> return 5
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: "ABFCACDB"에서 "AB"를 제거하고, 그 결과 "FCACDB"에서 "CD"를 제거, "FCAB"에서 다시 "AB"를 제거하여 최종적으로 "FC"가 남아 길이는 2입니다.
 * 2. 예제 #2: "ACBBD"는 "AB"나 "CD"가 없기 때문에 더 이상 제거할 수 없고 길이는 5입니다.
 */

function minLength(s) {
    while (s.includes('AB') || s.includes('CD')) {
        s = s.replace('AB', ''); 
        s = s.replace('CD', ''); 
    }
    
    return s.length;
}

// 입출력 예시 테스트
console.log(minLength("ABFCACDB")); // 기대 값: 2
console.log(minLength("ACBBD")); // 기대 값: 5

/**
 * 시간 복잡도:
 * 문자열에서 'AB'와 'CD'를 찾고 제거하는 작업을 반복합니다.
 * 각 반복에서 문자열 길이를 N이라고 할 때, 각각의 'AB' 또는 'CD'를 제거하는 데 O(N)의 시간이 소요됩니다.
 * 최대 N번 반복할 수 있으므로 시간 복잡도는 O(N^2)입니다.
 * 
 * 공간 복잡도:
 * 문자열 `s`를 수정하므로 O(N)의 공간을 사용합니다.
 * 
 * 개선할 점:
 * 현재 방식은 문자열에서 'AB'나 'CD'가 여러 번 나타날 경우 전체 문자열을 여러 번 스캔하므로 비효율적일 수 있습니다. 
 * 스택을 사용하여 O(N)의 시간 복잡도로 문제를 해결할 수 있는 방법을 고려할 수 있습니다.
 */

// 개선된 답변: 스택을 이용한 해결
function minLengthImproved(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        
        // 스택의 최상단 값과 현재 문자가 'AB' 또는 'CD'를 이루는 경우 제거
        if (stack.length > 0 && (
            (stack[stack.length - 1] === 'A' && current === 'B') ||
            (stack[stack.length - 1] === 'C' && current === 'D')
        )) {
            stack.pop(); // 제거
        } else {
            stack.push(current); // 스택에 추가
        }
    }
    
    return stack.length; // 스택에 남아 있는 문자의 길이가 최종 문자열의 길이
}

/** 
 * 개선된 시간 복잡도:
 * 스택을 이용한 방식은 문자열을 한 번 순회하면서 처리하므로 O(N)입니다.
 * 
 * 개선된 공간 복잡도:
 * 스택을 사용하여 문자열의 크기만큼 공간이 필요하므로 O(N)입니다.
 */
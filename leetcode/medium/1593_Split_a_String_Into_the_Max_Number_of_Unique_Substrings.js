// 문제 유형: [백트래킹 문제]
/**
 * 문제 설명:
 * 주어진 문자열을 유니크한 부분 문자열로 최대한 많이 나누는 문제입니다.
 * 문자열을 분할할 때, 각 분할된 부분 문자열은 중복이 없어야 하며,
 * 나눈 부분 문자열을 합쳤을 때 원래의 문자열과 같아야 합니다.
 * 
 * 제한 사항:
 * 1. 1 <= s.length <= 16
 * 2. s는 영어 소문자로만 이루어져 있습니다.
 * 
 * 입출력 예:
 * s = "ababccc" -> return 5
 * s = "aba" -> return 2
 * s = "aa" -> return 1
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: ["a", "b", "ab", "c", "cc"]로 최대 5개의 유니크한 부분 문자열로 분할 가능합니다.
 * 2. 예제 #2: ["a", "ba"]로 최대 2개의 유니크한 부분 문자열로 분할 가능합니다.
 * 3. 예제 #3: "aa"는 분할할 수 없기 때문에, 최대 1개의 유니크한 부분 문자열로 분할 가능합니다.
 */

function maxUniqueSplit(s) {
    const set = new Set();

    const back = (start) =>{
        if (start === s.length) return 0;
        let max = 0;
        let current = "";
        // 문자열의 첫 문자부터 차례로 나누어 유니크한 부분 문자열을 찾음
        for (let i = start; i < s.length; i++) { 
            current += s[i];
            if (!set.has(current)) {
                set.add(current);
                // 유니크한 문자열을 찾으면 나머지 문자열에서 최대 분할 개수를 구함
                max = Math.max(max, 1 + back(i + 1));
                set.delete(current);  // 백트래킹을 위해 삭제
            }
        }
        return max;
    }
    return back(0);
}

// 입출력 예시 테스트
console.log(maxUniqueSplit("ababccc")); // 기대 값: 5
console.log(maxUniqueSplit("aba")); // 기대 값: 2
console.log(maxUniqueSplit("aa")); // 기대 값: 1

/**
 * 시간 복잡도:
 * 문자열의 길이가 n일 때, 백트래킹으로 모든 가능한 분할을 탐색하므로
 * 시간 복잡도는 O(2^n)입니다. 각 분할마다 set을 사용하는 연산이 있으므로,
 * 대략 O(n * 2^n)입니다.
 * 
 * 공간 복잡도:
 * 문자열을 저장하는 set과 재귀 호출 스택을 사용하므로, 공간 복잡도는 O(n)입니다.
 */

/**
 * 개선할 점:
 * 1. 현재 풀이는 모든 분할 경로를 탐색하므로 최적화가 어려운 문제입니다.
 * 2. 캐싱을 추가하여 이미 계산된 분할 경로의 결과를 재사용할 수 있습니다.
 */

// 개선된 답변
function maxUniqueSplitImproved(s) {
    const set = new Set();
    const cache = new Map();

    const back = (start) =>{
        if (start === s.length) return 0;
        if (cache.has(start)) return cache.get(start);
        
        let max = 0;
        let current = "";
        for (let i = start; i < s.length; i++) { 
            current += s[i];
            if (!set.has(current)) {
                set.add(current);
                max = Math.max(max, 1 + back(i + 1));
                set.delete(current);
            }
        }
        cache.set(start, max);  // 결과를 캐싱
        return max;
    }
    return back(0);
}

/** 
 * 개선된 시간 복잡도:
 * 캐싱을 통해 중복 연산을 방지하여 시간 복잡도를 약간 개선할 수 있지만,
 * 여전히 근본적으로는 O(n * 2^n) 복잡도를 가집니다.
 * 
 * 개선된 공간 복잡도:
 * 캐시를 사용하므로 공간 복잡도는 O(n)으로 유지됩니다.
 */
// 문제 유형: [배열, 나머지 연산, 그리디]

/**
 * 문제 설명:
 * 정수 배열 `arr`와 정수 `k`가 주어졌을 때, 배열을 정확히 `n / 2`개의 쌍으로 나누어 각 쌍의 합이 `k`로 나누어 떨어지도록 하고자 합니다.
 * 각 쌍의 합이 `k`의 배수가 되는 방법이 존재하면 `true`, 불가능하면 `false`를 반환하세요.
 * 
 * 제한 사항:
 * 1. 배열 `arr`의 길이 `n`은 항상 짝수입니다.
 * 2. 배열 요소의 범위는 음수와 양수를 포함할 수 있습니다.
 * 3. `k`는 1 이상의 정수입니다.
 * 
 * 입출력 예:
 * arr = [1,2,3,4,5,10,6,7,8,9], k = 5 -> return true
 * arr = [1,2,3,4,5,6], k = 7 -> return true
 * arr = [1,2,3,4,5,6], k = 10 -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 가능한 쌍은 (1,9), (2,8), (3,7), (4,6), (5,10)로 각 쌍의 합이 `k = 5`의 배수입니다.
 * 2. 예제 #2: 가능한 쌍은 (1,6), (2,5), (3,4)로 각 쌍의 합이 `k = 7`의 배수입니다.
 * 3. 예제 #3: `k = 10`으로 각 쌍을 구성할 수 없으므로 `false`를 반환합니다.
 */

function solution(arr, k) {
    const div = arr.map(n => ((n % k) + k) % k);
    const remainderCount = new Array(k).fill(0);

    div.forEach(remainder => {
        remainderCount[remainder]++;
    });

    if (remainderCount[0] % 2 !== 0) return false;

    for (let i = 1; i <= k / 2; i++) {
        if (remainderCount[i] !== remainderCount[k - i]) {
            return false;
        }
    }

    return true;
}

// 입출력 예시 테스트
console.log(solution([1,2,3,4,5,10,6,7,8,9], 5)); // 기대 값: true
console.log(solution([1,2,3,4,5,6], 7)); // 기대 값: true
console.log(solution([1,2,3,4,5,6], 10)); // 기대 값: false

/**
 * 시간 복잡도:
 * - O(n): 배열을 한 번 순회하며 나머지 값을 계산하고 카운팅하는 작업이 필요합니다.
 * 
 * 공간 복잡도:
 * - O(k): 나머지 값을 저장하는 `remainderCount` 배열이 필요하므로, `k` 크기의 공간이 사용됩니다.
 */

/**
 * 개선할 점:
 * - 현재 문제를 최적화된 방식으로 해결하여 추가적인 개선 사항은 없습니다.
 */
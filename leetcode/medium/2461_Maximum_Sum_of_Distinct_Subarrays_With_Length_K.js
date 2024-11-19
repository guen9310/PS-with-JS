// 문제 유형: [슬라이딩 윈도우, 해시셋]
/**
 * 문제 설명:
 * 정수 배열 `nums`와 정수 `k`가 주어집니다. 길이가 `k`이고 모든 요소가 서로 다른 부분 배열 중에서 최대 합을 반환하세요.
 * 
 * 조건:
 * - 부분 배열은 배열의 연속된 요소로 구성됩니다.
 * - 조건에 맞는 부분 배열이 없다면 0을 반환합니다.
 * 
 * 제한 사항:
 * 1. 1 ≤ k ≤ nums.length ≤ 10^5
 * 2. 1 ≤ nums[i] ≤ 10^5
 * 
 * 입출력 예:
 * nums = [1,5,4,2,9,9,9], k = 3 -> return 15
 * nums = [4,4,4], k = 3 -> return 0
 * 
 * 입출력 예 설명:
 * 1. 예제 #1:
 *    - 길이가 3인 부분 배열: [1,5,4], [5,4,2], [4,2,9], [2,9,9], [9,9,9]
 *    - 중복이 없는 배열: [1,5,4] (합: 10), [5,4,2] (합: 11), [4,2,9] (합: 15)
 *    - 최대 합은 15입니다.
 * 2. 예제 #2:
 *    - 길이가 3인 부분 배열: [4,4,4]
 *    - 모든 배열에 중복된 값이 있어 조건을 만족하지 않습니다.
 *    - 결과는 0입니다.
 */

function solution(nums, k) {
    let maxSum = 0;
    let currentSum = 0;
    let window = new Set();
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        // 중복 발생 시, 윈도우 축소
        while (window.has(nums[right])) {
            window.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }

        // 현재 요소 추가
        window.add(nums[right]);
        currentSum += nums[right];

        // 윈도우 크기가 k일 때 결과 계산
        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, currentSum);
            // 윈도우 축소
            window.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
    }

    return maxSum;
}

// 입출력 예시 테스트
console.log(solution([1,5,4,2,9,9,9], 3)); // 기대 값: 15
console.log(solution([4,4,4], 3)); // 기대 값: 0

/**
 * 시간 복잡도:
 * - O(n): 슬라이딩 윈도우를 사용하여 각 요소를 한 번씩 방문합니다.
 * 
 * 공간 복잡도:
 * - O(k): 최대 `k`개의 요소를 `Set`에 저장합니다.
 */

/**
 * 개선할 점:
 * - 현재 구현은 충분히 최적화되어 있으며, 문제를 해결하는 데 적합합니다.
 */
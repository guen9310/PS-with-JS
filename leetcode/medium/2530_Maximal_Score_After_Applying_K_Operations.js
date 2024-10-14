/**
 * 문제 설명:
 * 주어진 배열 `nums`에서 `k`번 작업을 적용하여 얻을 수 있는 최대 점수를 구하는 문제입니다.
 * 작업은 각 요소를 선택해 점수를 추가하고, 해당 요소를 3으로 나눈 값의 천장값으로 바꾸는 방식입니다.
 * 
 * 제한 사항:
 * 1. nums 배열의 길이 및 k는 최대 10^5까지 가능합니다.
 * 2. nums 배열 내의 값은 최대 10^9까지 가능합니다.
 * 
 * 입출력 예:
 * nums = [10, 10, 10, 10, 10], k = 5 -> return 50
 * nums = [1, 10, 3, 3, 3], k = 3 -> return 17
 * 
 * 입출력 예 설명:
 * - 예제 #1: 각 요소를 한 번씩 선택해 최대 점수 50을 얻을 수 있습니다.
 * - 예제 #2: 최대 점수를 얻기 위해 큰 값을 먼저 선택하고 3으로 나누는 작업을 반복합니다. 최종 점수는 17입니다.
 */

function solution(nums, k) {
    let result = 0;

    for (let i = 0; i < k; i++) {
        let maxIndex = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] > nums[maxIndex]) {
                maxIndex = j;
            }
        }
        
        result += nums[maxIndex];
        nums[maxIndex] = Math.ceil(nums[maxIndex] / 3);
    }
    
    return result;
}

// 입출력 예시 테스트
console.log(solution([10, 10, 10, 10, 10], 5)); // 기대 값: 50
console.log(solution([1, 10, 3, 3, 3], 3)); // 기대 값: 17

/**
 * 시간 복잡도:
 * - 최대값을 찾는 과정에서 배열을 한 번 순회하므로 **O(n)**의 시간이 소요됩니다.
 * - 이를 k번 반복하므로, 총 시간 복잡도는 **O(k * n)**입니다.
 * 공간 복잡도:
 * - 별도의 자료구조를 사용하지 않으므로 **O(1)**의 추가 공간만 필요합니다.
 */


/**
 * 개선할 점:
 * - 이 로직은 대부분의 경우 작동하지만 배열의 크기가 매우 클 경우 비효율적으로 작동하여 시간 초과 에러가 발생할 수 있습니다.
 * - 배열을 매번 순회하여 최대값을 찾는 방식은 **O(k * n)**의 시간 복잡도를 가지므로 비효율적입니다.
 * - 이를 개선하기 위해 **우선순위 큐(Priority Queue)**를 사용하여 **O(log n)** 시간 복잡도로 최대값을 추적하고 처리할 수 있도록 개선해야 합니다.
 * - 우선순위 큐를 사용하면 최대값을 효율적으로 관리할 수 있어 성능이 크게 향상됩니다.
 * - 참고 :
 *   https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909266/max-heap-no-shit-sherlock-69-beats-100-easy-solution-with-explanation/?envType=daily-question&envId=2024-10-14
 */


// 개선된 답변
function maximalScore(nums, k) {
    const pq = new MaxPriorityQueue(); // 최대 우선순위 큐 생성
    let result = 0;

    // nums 배열의 모든 요소를 우선순위 큐에 삽입
    for (let num of nums) {
        pq.enqueue(num);
    }

    // k번 반복
    while (k > 0) {
        // 1. 최대값을 큐에서 추출
        const element = pq.dequeue().element;
        
        // 2. 그 값을 점수에 더함
        result += element;

        // 3. 그 값을 3으로 나눈 천장값을 다시 큐에 삽입
        pq.enqueue(Math.ceil(element / 3));

        k--;
    }
    
    return result;
}
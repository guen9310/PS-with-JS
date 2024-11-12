// 문제 유형: [해시 맵 문제, 슬라이딩 윈도우 문제]
/**
 * 문제 설명:
 * 정수 배열 `nums`와 정수 `k`가 주어질 때, `nums` 내에 같은 값을 갖는 두 인덱스 `i`, `j`가 존재하고, 
 * 그 인덱스 차이가 `k` 이하인지 확인합니다. 이러한 조건을 만족하는 인덱스 쌍이 있으면 true를 반환하고, 없으면 false를 반환합니다.
 * 
 * 제한 사항:
 * 1. 1 <= nums.length <= 10^5
 * 2. -10^9 <= nums[i] <= 10^9
 * 3. 0 <= k <= 10^5
 * 
 * 입출력 예:
 * nums = [1,2,3,1], k = 3 -> return true
 * nums = [1,0,1,1], k = 1 -> return true
 * nums = [1,2,3,1,2,3], k = 2 -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: `nums[0]`과 `nums[3]`가 동일하고, 인덱스 차이가 3이므로 조건을 만족해 true를 반환합니다.
 * 2. 예제 #2: `nums[2]`와 `nums[3]`가 동일하고, 인덱스 차이가 1이므로 조건을 만족해 true를 반환합니다.
 * 3. 예제 #3: 같은 값을 갖는 인덱스들이 있지만, 인덱스 차이가 모두 2보다 크므로 false를 반환합니다.
 */

function solution(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const prevIndex = map.get(nums[i]);
            if (i - prevIndex <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
}

// 입출력 예시 테스트
console.log(solution([1,2,3,1], 3)); // 기대 값: true
console.log(solution([1,0,1,1], 1)); // 기대 값: true
console.log(solution([1,2,3,1,2,3], 2)); // 기대 값: false

/**
 * 시간 복잡도:
 * O(n) - 배열을 한 번 순회하면서 각 요소를 해시 맵에 저장하므로, n은 nums 배열의 길이입니다.
 * 
 * 공간 복잡도:
 * O(min(n, k)) - 해시 맵에 최대 k개의 요소를 저장할 수 있으므로, 공간 복잡도는 min(n, k)입니다.
 */

/**
 * 개선할 점:
 * - 슬라이딩 윈도우 방식으로 `Map`의 크기를 `k`로 제한하면, 공간을 최적화할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return true;
        
        map.set(nums[i], i);
        
        // 슬라이딩 윈도우로 `k` 범위를 넘어가는 요소를 제거
        if (map.size > k) {
            map.delete(nums[i - k]);
        }
    }

    return false;
}

/** 
 * 개선된 시간 복잡도:
 * O(n) - 기존과 동일합니다.
 * 
 * 개선된 공간 복잡도:
 * O(k) - 슬라이딩 윈도우를 통해 Map의 크기를 최대 k로 제한하여 공간 최적화를 이룹니다.
 */
// 문제 유형: [비트 조작 문제, 누적 XOR 문제]
/**
 * 문제 설명:
 * 주어진 정렬된 배열 `nums`에서 각 쿼리마다 최대 `maximumBit` 비트를 갖는 비트가 반전된 값을 찾아야 합니다. 쿼리 수행 시마다 배열의 마지막 요소를 제거하며 쿼리를 반복합니다.
 * 
 * 제한 사항:
 * 1. 배열 `nums`의 길이는 1 이상입니다.
 * 2. `maximumBit`는 1 이상 32 이하입니다.
 * 
 * 입출력 예:
 * nums = [0,1,1,3], maximumBit = 2 -> return [0,3,2,3]
 * nums = [2,3,4,7], maximumBit = 3 -> return [5,2,6,5]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 배열 `nums`에 대해 최대 XOR 값을 찾는 과정이 있습니다.
 * 2. 예제 #2: 각 쿼리에서 마지막 요소를 제거하며 최대 XOR 값을 찾습니다.
 */

function getMaximumXor(nums, maximumBit) {
    let xor = (1 << maximumBit) - 1;
    for(let i = 0; i < nums.length; i++){
        xor ^= nums[i];
        nums[i] = xor;
    }
    return nums.reverse();
}

// 입출력 예시 테스트
console.log(getMaximumXor([0,1,1,3], 2)); // 기대 값: [0,3,2,3]
console.log(getMaximumXor([2,3,4,7], 3)); // 기대 값: [5,2,6,5]
console.log(getMaximumXor([0,1,2,2,5,7], 3)); // 기대 값: [4,3,6,4,6,7]

/**
 * 시간 복잡도: O(n) (배열을 한 번 순회)
 * 
 * 공간 복잡도: O(1) (주어진 배열을 반전하여 결과로 사용하므로 추가 공간 사용이 없습니다.)
 */

/**
 * 개선할 점:
 * - 현재 로직은 최적화되어 있으므로, 개선점이 없습니다.
 */
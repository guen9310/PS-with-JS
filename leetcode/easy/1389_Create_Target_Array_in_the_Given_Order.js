// 문제 유형: 배열 조작 문제

/**
 * 문제 설명:
 * 두 개의 정수 배열 `nums`와 `index`가 주어집니다. 
 * 초기에는 비어 있는 `target` 배열에 대해 다음 규칙을 사용하여 값을 삽입합니다:
 * 1. `nums[i]`와 `index[i]`를 읽어 `index[i]` 위치에 `nums[i]` 값을 삽입합니다.
 * 2. 위 과정을 모든 요소를 읽을 때까지 반복합니다.
 * 결과로 생성된 `target` 배열을 반환하세요.
 * 
 * 제한 사항:
 * 1. 1 <= nums.length, index.length <= 100
 * 2. nums.length == index.length
 * 3. 0 <= nums[i] <= 100
 * 4. 0 <= index[i] <= i
 * 
 * 입출력 예:
 * nums = [0,1,2,3,4], index = [0,1,2,2,1] -> return [0,4,1,3,2]
 * nums = [1,2,3,4,0], index = [0,1,2,3,0] -> return [0,1,2,3,4]
 * nums = [1], index = [0] -> return [1]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 
 *    - [0, 4, 1, 3, 2] 순서로 `target` 배열이 생성됩니다.
 * 2. 예제 #2:
 *    - [0, 1, 2, 3, 4] 순서로 `target` 배열이 생성됩니다.
 * 3. 예제 #3:
 *    - [1] 배열이 반환됩니다.
 */

function solution(nums, index) {
    const target = []; // 결과를 저장할 배열

    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]); // index[i] 위치에 nums[i] 삽입
    }

    return target; // 생성된 배열 반환
}

// 입출력 예시 테스트
console.log(solution([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // 기대 값: [0, 4, 1, 3, 2]
console.log(solution([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])); // 기대 값: [0, 1, 2, 3, 4]
console.log(solution([1], [0])); // 기대 값: [1]

/**
 * 시간 복잡도:
 * O(n^2)
 * - `splice` 메서드가 최악의 경우 O(n) 시간이 소요되고, 이를 `n`번 반복
 * 
 * 공간 복잡도:
 * O(n)
 * - 결과를 저장하기 위한 `target` 배열 크기
 */

/**
 * 개선할 점:
 * - 현재 제약 조건에서는 충분히 효율적이지만, `splice`의 시간 복잡도를 고려할 때 더 큰 입력 크기에 대해 비효율적일 수 있습니다.
 * - 더 효율적인 알고리즘 설계를 위해 직접 배열을 생성하는 방법을 고려할 수 있습니다.
 */

function solutionImproved(nums, index) {
    const target = Array(nums.length).fill(null);

    for (let i = 0; i < nums.length; i++) {
        let current = index[i];

        for(let j = nums.length - 1; j > current; j--){
            target[j] = target[j - 1];
        }
        target[current] = nums[i];
    }

    return target;
}
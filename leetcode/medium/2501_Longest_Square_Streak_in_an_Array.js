// 문제 유형: 배열, Set, 탐색

/**
 * 문제 설명:
 * 정수 배열 `nums`가 주어졌을 때, square streak을 찾습니다.
 * square streak은 배열의 부분 수열 중에서 요소가 정렬된 상태에서 이전 요소의 제곱이 되는 수열을 말하며,
 * 길이가 최소 2 이상이어야 합니다.
 * 가장 긴 square streak의 길이를 반환하고, 만약 존재하지 않으면 -1을 반환합니다.
 * 
 * 제한 사항:
 * 1. 배열 `nums`의 길이는 1 이상 10^5 이하입니다.
 * 2. 배열 `nums`의 요소는 1 이상 10^6 이하의 정수입니다.
 * 
 * 입출력 예:
 * nums = [4, 3, 6, 16, 8, 2] -> return 3
 * nums = [2, 3, 5, 7, 11] -> return -1
 * nums = [1, 4, 16, 64] -> return 4
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 2의 제곱으로 이어지는 [2, 4, 16]이 최대 길이 3의 square streak입니다.
 * 2. 예제 #2: square streak을 구성할 수 없으므로 -1을 반환합니다.
 * 3. 예제 #3: 1, 4, 16, 64로 이루어진 square streak의 길이가 4입니다.
 */

function solution(nums) {
    let set = new Set(nums);
    let max = -1;
    nums.forEach((n) => {
        let count = 1;
        while (set.has(n ** 2)) {
            n *= n;
            count++;
        }
        max = Math.max(max, count > 1 ? count : -1);
    });
    return max;
}

// 입출력 예시 테스트
console.log(solution([4, 3, 6, 16, 8, 2])); // 기대 값: 3
console.log(solution([2, 3, 5, 7, 11])); // 기대 값: -1
console.log(solution([1, 4, 16, 64])); // 기대 값: 4

/**
 * 시간 복잡도:
 * - O(n): 배열을 순회하며 각 요소마다 Set을 통해 제곱 관계를 확인하므로,
 *   평균적으로 각 요소를 상수 시간 내에 탐색할 수 있습니다.
 * 
 * 공간 복잡도:
 * - O(n): Set에 nums 배열의 요소를 저장하므로 배열의 크기만큼 공간이 필요합니다.
 */

/**
 * 개선할 점:
 * - 현재 최적화된 상태로 추가적인 개선 사항이 없습니다.
 */
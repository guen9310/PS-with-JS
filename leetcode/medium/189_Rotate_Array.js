// 문제 유형: 배열 회전 문제

/**
 * 문제 설명:
 * 정수 배열 `nums`가 주어졌을 때, 배열을 오른쪽으로 `k`만큼 회전시킨 결과를 반환하세요.
 * 여기서 `k`는 0 이상의 정수입니다.
 *
 * 제한 사항:
 * 1. 1 <= nums.length <= 10^5
 * 2. -2^31 <= nums[i] <= 2^31 - 1
 * 3. 0 <= k <= 10^5
 *
 * 입출력 예:
 * nums = [1,2,3,4,5,6,7], k = 3 -> return [5,6,7,1,2,3,4]
 * nums = [-1,-100,3,99], k = 2 -> return [3,99,-1,-100]
 *
 * 입출력 예 설명:
 * 1. 예제 #1: 배열 [1,2,3,4,5,6,7]에서 3회 오른쪽 회전하면 [5,6,7,1,2,3,4]가 됩니다.
 * 2. 예제 #2: 배열 [-1,-100,3,99]에서 2회 오른쪽 회전하면 [3,99,-1,-100]가 됩니다.
 */

function solution(nums, k) {
    let len = nums.length;
    k = k % len;
    let arr = [...nums, ...nums];
    nums.splice(0, len, ...arr.slice(len - k, len + len - k));
}

// 입출력 예시 테스트
console.log(solution([1,2,3,4,5,6,7], 3)); // 기대 값: [5,6,7,1,2,3,4]
console.log(solution([-1,-100,3,99], 2)); // 기대 값: [3,99,-1,-100]

/**
 * 시간 복잡도:
 * O(n) - 배열을 복사하고, 슬라이싱 및 치환 작업을 수행하므로 O(n)입니다.
 *
 * 공간 복잡도:
 * O(n) - 복사된 배열 `arr`를 사용하기 때문에 배열 크기만큼 추가 공간이 필요합니다.
 */

// 개선된 답변
function solutionImproved(nums, k) {
    let len = nums.length;
    k = k % len;

    // 전체 배열을 뒤집음
    reverse(nums, 0, len - 1);
    // 앞부분 k 개를 뒤집음
    reverse(nums, 0, k - 1);
    // 나머지 뒷부분을 뒤집음
    reverse(nums, k, len - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// 입출력 예시 테스트
console.log(solutionImproved([1,2,3,4,5,6,7], 3)); // 기대 값: [5,6,7,1,2,3,4]
console.log(solutionImproved([-1,-100,3,99], 2)); // 기대 값: [3,99,-1,-100]

/** 
 * 개선된 시간 복잡도:
 * O(n) - 배열을 세 번 뒤집기 때문에 O(n)입니다.
 * 
 * 개선된 공간 복잡도:
 * O(1) - 배열을 제자리에서 수정하므로 추가 공간이 필요하지 않습니다.
 */
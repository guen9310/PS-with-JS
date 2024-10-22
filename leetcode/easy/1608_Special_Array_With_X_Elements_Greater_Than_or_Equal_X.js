// 문제 유형: [정렬 문제, 탐색 문제]
/**
 * 문제 설명:
 * 주어진 배열에서 특정 숫자 `x`가 배열에 존재하는지 찾는 문제입니다. `x`는 배열에서 `x` 이상의 원소가 정확히 `x`개 존재할 때 해당 값을 의미합니다. 만약 조건을 만족하는 `x`가 존재하지 않으면 -1을 반환합니다.
 * 
 * 제한 사항:
 * 1. 배열의 길이는 1 이상 100 이상입니다.
 * 2. 배열의 각 원소는 0 이상 100 이하의 정수입니다.
 * 
 * 입출력 예:
 * nums = [3, 5], return 2
 * nums = [0, 0], return -1
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 배열 [3, 5]에서 2 이상의 값은 2개이므로 2가 답입니다.
 * 2. 예제 #2: 배열 [0, 0]에서는 조건을 만족하는 값이 없으므로 -1을 반환합니다.
 */

function solution(nums) {
    nums.sort((a, b) => a - b);
    
    for (let x = 0; x <= nums.length; x++) {
        const count = nums.filter(n => n >= x).length; 
        if (count === x) {
            return x;
        }
    }
    
    return -1;
}

// 입출력 예시 테스트
console.log(solution([3, 5])); // 기대 값: 2
console.log(solution([0, 0])); // 기대 값: -1

/**
 * 시간 복잡도:
 * 배열을 정렬하는 데 O(N log N)이 소요되고, 각 숫자에 대해 필터링하여 개수를 세는 작업이 O(N)입니다.
 * 전체 시간 복잡도: O(N log N + N^2)
 * 
 * 공간 복잡도:
 * 추가적인 배열을 사용하지 않고, O(N)의 공간 복잡도를 가집니다.
 */

/**
 * 개선할 점:
 * 배열을 정렬한 후, 이진 탐색을 사용하여 좀 더 효율적으로 `x`를 찾는 방법을 고려할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(nums) {
    nums.sort((a, b) => a - b);
    
    for (let x = 0; x <= nums.length; x++) {
        const idx = nums.length - x;
        if ((idx === 0 || nums[idx - 1] < x) && (idx === nums.length || nums[idx] >= x)) {
            return x;
        }
    }
    
    return -1;
}

/** 
 * 개선된 시간 복잡도:
 * 배열을 정렬하는 데 O(N log N), 탐색에 O(N)이므로, 최종 시간 복잡도는 O(N log N)입니다.
 * 
 * 개선된 공간 복잡도:
 * 정렬된 배열을 재사용하므로 O(N)의 공간 복잡도를 가집니다.
 */
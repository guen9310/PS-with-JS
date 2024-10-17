/**
 * 문제 설명:
 * 정수 num이 주어집니다. 두 자리 숫자를 최대 한 번만 교환하여 최대 값의 숫자를 만들어야 합니다.
 * 가능한 최대 값의 숫자를 반환하세요.
 * 
 * 제한 사항:
 * 0 <= num <= 10^8
 * 
 * 입출력 예:
 * 1. 입력: num = 2736
 *    출력: 7236
 *    설명: 2와 7을 교환하여 최대값을 만듭니다.
 * 
 * 2. 입력: num = 9973
 *    출력: 9973
 *    설명: 교환할 필요가 없습니다.
 * 
 */

function solution(num){
    let nums = String(num).split('');
    const lastIndex = new Map();

    for (let i = 0; i < nums.length; i++){
        lastIndex.set(nums[i], i);
    }
    
    for (let i = 0; i < nums.length; i++) {
        for (let n = 9; n > nums[i]; n--) {
            if (lastIndex.has(String(n)) && lastIndex.get(String(n)) > i) {
                [nums[i], nums[lastIndex.get(String(n))]] = [nums[lastIndex.get(String(n))], nums[i]];
                return Number(nums.join(''));
            }
        }
    }
    return num;
}

console.log(solution(2736)); // 7236
console.log(solution(9973)); // 9973

/*
 * 시간 복잡도:
 * O(n): 숫자의 자리 수에 비례하여 배열을 순회합니다.
 *
 * 공간 복잡도:
 * O(n): 각 자리 숫자의 마지막 인덱스를 저장하기 위한 추가적인 공간이 필요합니다.
 *
 * 개선할 점:
 * - 현재 알고리즘은 효율적으로 작동하지만, 중첩된 반복문을 최적화할 수 있는 방법을 고려할 수 있습니다.
 * - 추가로, 최대값을 만드는 교환을 빠르게 탐색하기 위한 방법론을 고민할 수 있습니다.
 */

function solutionImproved(num) {
    let nums = String(num).split('').map(Number); // 숫자를 배열로 변환
    const lastMax = Array(nums.length).fill(0);   // 각 인덱스에서 뒤쪽으로 가장 큰 값 저장
    let maxIdx = nums.length - 1;

    // 뒤에서부터 최대값을 기록
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[maxIdx]) {
            maxIdx = i; // 더 큰 값이 있으면 해당 인덱스를 기록
        }
        lastMax[i] = maxIdx; // 현재 인덱스에서 뒤쪽으로 가장 큰 값을 저장
    }

    // 교환 가능한 최대값 탐색
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[lastMax[i]]) {
            // 현재 자리 숫자와 뒤에서 본 최대값이 다르면 교환
            [nums[i], nums[lastMax[i]]] = [nums[lastMax[i]], nums[i]];
            break; // 한 번만 교환이 가능하므로 바로 종료
        }
    }

    return Number(nums.join('')); // 배열을 다시 숫자로 변환 후 반환
}

/**
 * 왜 Map을 사용하지 않았는가?
 * 기존 로직에서 Map은 각 숫자의 마지막 인덱스를 저장하는 데 사용되었습니다. 
 * 하지만 개선된 로직에서는 뒤에서부터 각 자리의 최대값을 기록하는 방식으로 탐색을 한 번으로 줄이기 위해 
 * Map 대신 단순 배열을 사용했습니다.
 * 이 방식은 시간 복잡도를 최적화하고, 코드가 보다 간결해지도록 도와줍니다.
 */


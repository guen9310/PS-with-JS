// 문제 유형: [투 포인터 문제]

/**
 * 문제 설명:
 * 1-인덱스 배열인 numbers가 주어지며, 이 배열은 이미 비감소 순으로 정렬되어 있습니다. 두 수를 선택하여 합이 특정 목표 숫자(target)가 되도록 하는 인덱스 index1과 index2를 찾으십시오.
 * 이때, 1 <= index1 < index2 <= numbers.length를 만족해야 합니다. 찾은 인덱스 index1과 index2를 각각 1을 더한 배열 [index1, index2] 형태로 반환합니다.
 * 
 * 제한 사항:
 * 1. 2 <= numbers.length <= 3 * 10^4
 * 2. -1000 <= numbers[i] <= 1000
 * 3. numbers는 비감소 순으로 정렬되어 있음
 * 4. -1000 <= target <= 1000
 * 5. 항상 유일한 해가 존재함
 * 6. 동일한 요소를 두 번 사용할 수 없음
 * 7. 상수 공간만 사용할 것
 * 
 * 입출력 예:
 * numbers = [2,7,11,15], target = 9 -> return [1,2]
 * numbers = [2,3,4], target = 6 -> return [1,3]
 * numbers = [-1,0], target = -1 -> return [1,2]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: numbers[1] + numbers[2] = 2 + 7 = 9
 * 2. 예제 #2: numbers[1] + numbers[3] = 2 + 4 = 6
 * 3. 예제 #3: numbers[1] + numbers[2] = -1 + 0 = -1
 */

function solution(numbers, target) {
    let i = 0, j = numbers.length - 1;
    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) return [i + 1, j + 1];
        if (sum < target) i++;
        else j--;
    }
    return [];
}

// 입출력 예시 테스트
console.log(solution([2, 7, 11, 15], 9)); // 기대 값: [1, 2]
console.log(solution([2, 3, 4], 6)); // 기대 값: [1, 3]
console.log(solution([-1, 0], -1)); // 기대 값: [1, 2]

/**
 * 시간 복잡도: O(n)
 * - numbers 배열의 모든 요소를 한 번씩만 순회하므로 O(n)입니다.
 * 
 * 공간 복잡도: O(1)
 * - 인덱스와 합산 변수만 사용하여 상수 공간을 사용합니다.
 */

/**
 * 개선할 점:
 * - 현재 투 포인터 방식을 사용하여 최적화된 상태이므로 개선할 점이 없습니다.
 */
/**
 * 문제 설명:
 * 철호는 수열을 가지고 놀기 좋아합니다. 어느 날 철호는 어떤 자연수로 이루어진 원형 수열의 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇 가지인지 알아보고 싶어졌습니다. 원형 수열은 일반적인 수열에서 처음과 끝이 연결된 형태의 수열을 말합니다. 
 * 
 * 제한 사항:
 * 1. 3 ≤ elements의 길이 ≤ 1,000
 * 2. 1 ≤ elements의 원소 ≤ 1,000
 * 
 * 입출력 예:
 * elements = [7, 9, 1, 1, 4] -> return 18
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 원형 수열 [7, 9, 1, 1, 4]에서 만들 수 있는 부분 수열의 합은 {7, 9, 1, 1, 4, 7+9, 9+1, 1+1, 1+4, 4+7, 7+9+1, ...} 총 18가지가 됩니다.
 */

function solution(elements) {
    const length = elements.length;
    const elem = [...elements, ...elements];
    const set = new Set();

    for (let i = 1; i <= length; i++) {
        let currentSum = 0;

        for (let j = 0; j < i; j++) {
            currentSum += elem[j];
        }

        for (let k = i; k < elem.length; k++) {
            currentSum += elem[k] - elem[k - i]; 
            set.add(currentSum);
        }
    }

    return set.size; 
}

// 입출력 예시 테스트
console.log(solution([7, 9, 1, 1, 4])); // 기대 값: 18

/**
 * 시간 복잡도: O(n^2)
 * 
 * 공간 복잡도: O(n^2)
 */

/**
 * 개선할 점:
 * 1. 더 나은 알고리즘을 찾아 시간 복잡도를 개선할 수 있습니다.
 * 2. Set의 크기를 늘리지 않고 고유한 값을 처리하는 방법을 개선할 수 있습니다.
 */

function solutionImproved(elements) {
    const uniqueSums = new Set();
    const n = elements.length;

    // 원형 수열을 고려하기 위해 추가된 값이 포함된 합을 저장할 배열
    const extendedElements = [...elements, ...elements];

    // 전체 원형 수열을 하나의 배열로 가정하고 슬라이딩 윈도우 사용
    for (let start = 0; start < n; start++) {
        let sum = 0;
        for (let end = start; end < start + n; end++) {
            sum += extendedElements[end];
            uniqueSums.add(sum);
        }
    }

    // 고유한 합의 개수 반환
    return uniqueSums.size;
}


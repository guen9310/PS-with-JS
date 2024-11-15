// 문제 유형: [탐욕법 문제, 정렬 문제]
/**
 * 문제 설명:
 * 주어진 구간(interval) 배열에서 각 구간 [start, end]가 서로 겹치는 경우를 병합하여
 * 겹치지 않는 구간만 포함하는 배열을 반환하세요.
 * 
 * 제한 사항:
 * 1. 구간의 시작값은 항상 끝값보다 작거나 같습니다.
 * 2. 배열은 비어있지 않으며 최소 하나 이상의 구간을 포함합니다.
 * 3. 구간은 [start, end] 형태의 정수 배열입니다.
 * 
 * 입출력 예:
 * intervals = [[1,3],[2,6],[8,10],[15,18]] -> return [[1,6],[8,10],[15,18]]
 * intervals = [[1,4],[4,5]] -> return [[1,5]]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 
 *    - [1,3]과 [2,6]이 겹치므로 병합 -> [1,6]
 *    - [8,10], [15,18]은 다른 구간과 겹치지 않으므로 그대로 유지
 *    - 결과: [[1,6],[8,10],[15,18]]
 * 2. 예제 #2:
 *    - [1,4]와 [4,5]는 겹치므로 병합 -> [1,5]
 *    - 결과: [[1,5]]
 */

function solution(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [];

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (merged.length === 0 || merged[merged.length - 1][1] < start) {
            merged.push([start, end]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
        }
    }

    return merged;
}

// 입출력 예시 테스트
console.log(solution([[1,3],[2,6],[8,10],[15,18]])); // 기대 값: [[1,6],[8,10],[15,18]]
console.log(solution([[1,4],[4,5]])); // 기대 값: [[1,5]]

/**
 * 시간 복잡도:
 * - 정렬: O(n log n)
 * - 병합: O(n)
 * - 전체: O(n log n)
 * 
 * 공간 복잡도:
 * - 병합된 결과를 저장하는 배열: O(n)
 */

/**
 * 개선할 점:
 * - 이미 정렬된 입력이 주어진 경우, 정렬 단계를 생략하여 성능을 개선할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(intervals) {
    if (intervals.length <= 1) return intervals; // 구간이 하나거나 없는 경우 바로 반환

    let merged = [];
    let [prevStart, prevEnd] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];

        if (prevEnd < currentStart) {
            // 겹치지 않는 경우
            merged.push([prevStart, prevEnd]);
            [prevStart, prevEnd] = [currentStart, currentEnd];
        } else {
            // 겹치는 경우 병합
            prevEnd = Math.max(prevEnd, currentEnd);
        }
    }

    // 마지막 구간 추가
    merged.push([prevStart, prevEnd]);

    return merged;
}

/** 
 * 개선된 시간 복잡도:
 * - 이미 정렬된 경우 병합만 수행: O(n)
 * 
 * 개선된 공간 복잡도:
 * - 동일: O(n)
 */
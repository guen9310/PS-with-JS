// 가장 긴 행복한 문자열 문제
/**
 * 문제 설명:
 * 문자열 s는 다음 조건을 만족하면 행복한 문자열이라고 합니다:
 * 
 * 1. s는 문자 'a', 'b', 'c'만 포함됩니다.
 * 2. s는 "aaa", "bbb", "ccc"를 부분 문자열로 포함하지 않습니다.
 * 3. s는 문자의 'a'가 최대 a회 나타납니다.
 * 4. s는 문자의 'b'가 최대 b회 나타납니다.
 * 5. s는 문자의 'c'가 최대 c회 나타납니다.
 * 
 * 세 개의 정수 a, b, c가 주어졌을 때, 가장 긴 행복한 문자열을 반환합니다. 
 * 만약 가장 긴 행복한 문자열이 여러 개 있을 경우, 그 중 하나를 반환합니다.
 * 문자열이 존재하지 않는 경우 빈 문자열 ""을 반환합니다.
 * 
 * 제약 사항:
 * - 0 <= a, b, c <= 100
 * - a + b + c > 0
 */

function solution(a, b, c) {
   let result = "";

    const count = [
        ['a', a],
        ['b', b],
        ['c', c]
    ];

    while (true) {
        count.sort((x, y) => y[1] - x[1]);
        const [char1, count1] = count[0];
        if (count1 === 0) break;

        if (result.endsWith(char1.repeat(2))) {
            const [char2, count2] = count[1];

            if (count2 > 0) {
                result += char2;
                count[1][1]--;
            } else {
                break;
            }
        } else {
            const addCount = Math.min(2, count1);
            result += char1.repeat(addCount); 
            count[0][1] -= addCount;
        }
    }

    return result;
}

// 입출력 예시 테스트
// console.log(solution(1, 1, 7)); // 기대 값: "ccaccbcc"
// console.log(solution(7, 1, 0)); // 기대 값: "aabaa"

/**
 * 시간 복잡도:
 * - 매 반복마다 count 배열을 정렬해야 하므로 O(n log n) 시간이 소요됩니다. 이는 전체적으로 O(n^2 log n) 복잡도를 초래할 수 있습니다.
 * 
 * 공간 복잡도:
 * - O(n)입니다. (결과 문자열을 저장하는 배열에 따라)
 */

/**
 * 개선할 점:
 * - count 배열이 항상 3개의 요소를 가지고 있기 때문에, 정렬 대신 직접 최대 카운트를 찾는 방법을 사용할 수 있습니다. 이는 정렬의 O(1) 비용을 줄일 수 있습니다.
 * - 문자열의 길이가 길어질 경우, 문자열을 더할 때마다 새로운 메모리가 할당될 수 있습니다. 이를 방지하기 위해 배열을 사용하여 각 문자를 추가하고 마지막에 join() 메소드를 사용하여 배열을 문자열로 변환하는 방법이 있습니다.
 */

function solutionImproved(a, b, c) {
    const resultArray = [];
    const count = [
        ['a', a],
        ['b', b],
        ['c', c]
    ];

    while (true) {
        // 최대 카운트를 가진 문자 찾기
        count.sort((x, y) => y[1] - x[1]);
        const [char1, count1] = count[0];

        if (count1 === 0) break; // 더 이상 추가할 문자가 없으면 종료

        // 가장 많이 남은 문자가 두 번 연속으로 추가되는 경우
        if (resultArray.length >= 2 && resultArray[resultArray.length - 1] === char1 && resultArray[resultArray.length - 2] === char1) {
            const [char2, count2] = count[1];

            if (count2 > 0) {
                resultArray.push(char2); // 두 번째로 많이 남은 문자를 추가
                count[1][1]--;
            } else {
                break; // 추가할 수 있는 문자가 없으면 종료
            }
        } else {
            // 가장 많이 남은 문자를 최대 2개까지 추가
            const addCount = Math.min(2, count1);
            resultArray.push(char1.repeat(addCount)); 
            count[0][1] -= addCount;
        }
    }

    return resultArray.join(''); // 배열을 문자열로 변환하여 반환
};
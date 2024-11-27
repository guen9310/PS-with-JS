// 문제 유형: [완전 탐색, 배열 문제]
/**
 * 문제 설명:
 * 주어진 정수 배열 digits에서 세 개의 요소를 임의의 순서로 연결하여 고유한 정수를 만듭니다.
 * 만들어진 정수는 다음 조건을 만족해야 합니다:
 * 1. 정수는 세 자리 숫자여야 합니다.
 * 2. 정수는 0으로 시작하지 않아야 합니다.
 * 3. 정수는 짝수여야 합니다.
 * 조건을 만족하는 고유한 정수를 오름차순으로 정렬하여 반환합니다.
 * 
 * 제한 사항:
 * 1. 3 <= digits.length <= 100
 * 2. 0 <= digits[i] <= 9
 * 
 * 입출력 예:
 * digits = [2,1,3,0] -> return [102,120,130,132,210,230,302,310,312,320]
 * digits = [2,2,8,8,2] -> return [222,228,282,288,822,828,882]
 * digits = [3,7,5] -> return []
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 조건에 맞는 모든 짝수 정수를 생성하여 정렬.
 * 2. 예제 #2: 중복된 숫자를 허용하여 고유한 결과 생성.
 * 3. 예제 #3: 짝수를 만들 수 없으므로 빈 배열 반환.
 */

function solution(digits) {
    const set = new Set();
    const n = digits.length;

    // 짝수 확인
    const evenDigits = digits.filter(d => d % 2 === 0);
    if (evenDigits.length === 0) return [];

    // 3중 중첩 루프를 통한 완전 탐색
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue; // 인덱스가 동일하면 스킵
            for (let k = 0; k < n; k++) {
                if (k === i || k === j) continue; // 중복 인덱스 방지
                const num = `${digits[i]}${digits[j]}${digits[k]}`;

                // 조건 확인: 0으로 시작하지 않고 마지막 자릿수가 짝수여야 함
                if (num[0] !== '0' && num[2] % 2 === 0) {
                    set.add(Number(num)); // 고유 숫자를 Set에 추가
                }
            }
        }
    }

    // 결과를 오름차순으로 정렬하여 반환
    return Array.from(set).sort((a, b) => a - b);
}

// 입출력 예시 테스트
console.log(solution([2, 1, 3, 0])); // 기대 값: [102,120,130,132,210,230,302,310,312,320]
console.log(solution([2, 2, 8, 8, 2])); // 기대 값: [222,228,282,288,822,828,882]
console.log(solution([3, 7, 5])); // 기대 값: []

/**
 * 시간 복잡도:
 * - O(n^3): 3중 반복문으로 모든 조합을 생성.
 * - 고유 숫자를 정렬하는 데 O(m log m), 여기서 m은 고유 숫자의 개수.
 * 
 * 공간 복잡도:
 * - O(m): Set에 고유 숫자를 저장.
 */

/**
 * 개선할 점:
 * - 조건을 조기에 체크하여 불필요한 연산을 줄이는 최적화 가능.
 */

// 개선된 답변
function solutionImproved(digits) {
    const arr = Array(10).fill(0); // 각 숫자의 빈도수 저장
    const result = []; // 결과 배열

    // 각 숫자의 빈도를 계산
    for (let digit of digits) {
        arr[digit]++;
    }

    // 첫 번째 자릿수는 0이 될 수 없으므로 1~9 반복
    for (let i = 1; i <= 9; i++) {
        if (arr[i] === 0) continue; // 해당 숫자가 없으면 건너뜀
        arr[i]--;
        // 두 번째 자릿수는 0~9 모두 가능
        for (let j = 0; j <= 9; j++) {
            if (arr[j] === 0) continue; // 해당 숫자가 없으면 건너뜀
            arr[j]--;
            // 세 번째 자릿수는 짝수만 가능
            for (let k of [0, 2, 4, 6, 8]) {
                if (arr[k] === 0) continue; // 해당 숫자가 없으면 건너뜀
                const num = i * 100 + j * 10 + k; // 세 자리 숫자 생성
                result.push(num);
            }
            arr[j]++; // 두 번째 자릿수 복원
        }
        arr[i]++; // 첫 번째 자릿수 복원
    }

    // 결과 정렬 후 반환
    return result.sort((a, b) => a - b);
}

// 입출력 예시 테스트
console.log(solutionImproved([2, 1, 3, 0])); // 기대 값: [102,120,130,132,210,230,302,310,312,320]
console.log(solutionImproved([2, 2, 8, 8, 2])); // 기대 값: [222,228,282,288,822,828,882]
console.log(solutionImproved([3, 7, 5])); // 기대 값: []

/**
 * 시간 복잡도:
 * - O(10 * 10 * 5) = O(500): 가능한 모든 조합 탐색.
 * - digits 배열에서 빈도를 계산하는 데 O(n).
 * 
 * 공간 복잡도:
 * - O(10): 숫자의 빈도를 저장하는 배열 사용.
 */

/** 
 * 개선된 시간 복잡도:
 * - 여전히 O(n^3)이나, 조건 조기 체크로 불필요한 연산 감소.
 * 
 * 개선된 공간 복잡도:
 * - O(m): Set에 고유 숫자를 저장.
 */
// 문제 유형: [탐욕법 문제, 배열 문제]
/**
 * 문제 설명:
 * 주어진 양의 정수 배열 nums에서 Alice와 Bob이 게임을 합니다. 
 * Alice는 한 자리수(single-digit) 또는 두 자리수(double-digit) 중 하나를 선택하고 나머지 숫자는 Bob이 가집니다.
 * Alice가 자신의 숫자 합이 Bob의 숫자 합보다 크면 승리합니다.
 * Alice가 이길 수 있다면 true를 반환하고, 그렇지 않다면 false를 반환합니다.
 * 
 * 제한 사항:
 * 1. 1 <= nums.length <= 100
 * 2. 1 <= nums[i] <= 99
 * 
 * 입출력 예:
 * nums = [1,2,3,4,10] -> return false
 * nums = [1,2,3,4,5,14] -> return true
 * nums = [5,5,5,25] -> return true
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: Alice는 single-digit(1,2,3,4) 또는 double-digit(10) 중 하나를 선택할 수 있지만, Bob의 합과 같거나 작아 이길 수 없습니다.
 * 2. 예제 #2: Alice는 single-digit(1,2,3,4,5)을 선택하여 총합이 15가 되고, Bob의 합(14)보다 크므로 이길 수 있습니다.
 * 3. 예제 #3: Alice는 double-digit(25)을 선택하여 총합이 25가 되고, Bob의 합(15)보다 크므로 이길 수 있습니다.
 */

function solution(nums) {
    let map = new Map();
    let single = 0;
    let double = 0;

    for (let num of nums) {
        let length = String(num).length;
        if (!map.has(length)) {
            map.set(length, []);
        }
        map.set(length, [...map.get(length), num]);
    }

    // 각 자릿수별 합 계산
    for (let [digit, arr] of map) {
        let sum = arr.reduce((acc, cur) => acc += cur, 0);
        if (digit === 1) {
            single = sum;
        } else {
            double = sum;
        }
    }

    return single !== double;
}

// 입출력 예시 테스트
console.log(solution([1, 2, 3, 4, 10])); // 기대 값: false
console.log(solution([1, 2, 3, 4, 5, 14])); // 기대 값: true
console.log(solution([5, 5, 5, 25])); // 기대 값: true

/**
 * 시간 복잡도:
 * - O(n): nums 배열을 한 번 순회하며 숫자를 분리 및 합산.
 * 
 * 공간 복잡도:
 * - O(n): Map에 nums 배열의 데이터를 저장.
 */

/**
 * 개선할 점:
 * - Map 객체 대신 간단한 변수 두 개(single, double)만 사용하여 불필요한 데이터 구조 제거 가능.
 */

// 개선된 답변
function solutionImproved(nums) {
    let single = 0;
    let double = 0;

    // 단일 반복문으로 single, double 합산
    for (let num of nums) {
        if (String(num).length === 1) {
            single += num;
        } else {
            double += num;
        }
    }

    // Alice가 승리 가능한지 판단
    return single !== double;
}

/** 
 * 개선된 시간 복잡도:
 * - O(n): nums 배열을 단일 반복문으로 순회.
 * 
 * 개선된 공간 복잡도:
 * - O(1): Map 객체 제거로 상수 공간만 사용.
 */
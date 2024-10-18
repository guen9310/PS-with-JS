// 문제 유형: 비트 연산 문제

/**
 * 문제 설명:
 * 정수 배열 nums가 주어졌을 때, nums의 부분 집합 중 비트 OR 연산의 값이 최대가 되는 경우의 수를 반환합니다.
 * 배열 a는 배열 b의 부분 집합일 수 있으며, 부분 집합은 b에서 몇몇 요소를 삭제하여 얻을 수 있습니다. 
 * 또한, 선택된 요소의 인덱스가 다르면 다른 부분 집합으로 간주합니다.
 * 
 * 제한 사항:
 * 1. 1 <= nums.length <= 16
 * 2. 1 <= nums[i] <= 105
 * 
 * 입출력 예:
 * nums = [3, 1] -> return 2
 * nums = [2, 2, 2] -> return 7
 * nums = [3, 2, 1, 5] -> return 6
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 최대 비트 OR 값은 3이고, 해당하는 부분 집합은 [3], [3,1] 두 가지입니다.
 * 2. 예제 #2: 모든 부분 집합의 비트 OR 값이 2입니다. 총 2^3 - 1 = 7개의 부분 집합이 존재합니다.
 * 3. 예제 #3: 최대 비트 OR 값은 7이며, 해당하는 부분 집합은 [3, 5], [3, 1, 5], [3, 2, 5], [3, 2, 1, 5], [2, 5], [2, 1, 5]입니다.
 */

function solution(nums) {
    let max = 0;
    let count = 0;
    let total = 1 << nums.length;

    for(let num of nums){
        max = max | num;
    }

    for(let i = 1; i < total; i++){
        let current = 0;
        for(let j = 0; j < nums.length; j++){
            if(i & (1 << j)){
                current |= nums[j];
            }
        }
        if(current === max){
            count++;
        }
    }
    return count;
}

// 입출력 예시 테스트
console.log(solution([3,1])); // 기대 값: 2 
console.log(solution([2, 2, 2])); // 기대 값: 7
console.log(solution([3, 2, 1, 5])) // 기대 값: 6

/**
 * 시간 복잡도:
 * 배열의 길이가 n일 때, 총 2^n개의 부분 집합을 탐색해야 하므로, 시간 복잡도는 O(2^n)입니다.
 * 각 부분 집합에 대해 최대 n번의 OR 연산을 수행하므로, 최종 시간 복잡도는 O(n * 2^n)입니다.
 * 
 * 공간 복잡도:
 * 공간 복잡도는 주로 입력 배열과 변수를 저장하는 데 사용됩니다.
 * 최대 O(n) 크기의 배열을 다루기 때문에, 공간 복잡도는 O(n)입니다.
 * 
 * 개선할 점:
 * - 최대 OR 값이 이미 계산되었으므로, 불필요한 부분 집합에 대한 OR 연산을 줄일 수 있는 방법을 고민할 수 있습니다.
 * - 큰 배열에 대해서는 시간이 오래 걸릴 수 있으므로, 가능한 최적화 방식을 추가적으로 탐구할 필요가 있습니다.
 * - 재귀를 이용해 부분 집합을 생성하는 방식으로 변경하여 코드 가독성을 높일 수 있습니다.
 */

function solutionImproved(nums) {
    let max = 0;
    let count = 0;

    // nums 배열의 최대 비트 OR 값을 계산
    for (let num of nums) {
        max |= num;
    }

    // 재귀를 통해 부분 집합 생성 및 OR 값 계산
    function dfs(index, currentOr) {
        // 배열을 모두 탐색한 경우
        if (index === nums.length) {
            // 현재 OR 값이 최대 OR 값과 같으면 카운트 증가
            if (currentOr === max) {
                count++;
            }
            return;
        }

        // 현재 인덱스를 포함하지 않는 경우
        dfs(index + 1, currentOr);

        // 현재 인덱스를 포함하는 경우
        dfs(index + 1, currentOr | nums[index]);
    }

    // 0번째 인덱스부터 시작하며, OR 연산 초기값은 0
    dfs(0, 0);

    return count;
}

// 입출력 예시 테스트
console.log(solutionImproved([3, 1])); // 기대 값: 2
console.log(solutionImproved([2, 2, 2])); // 기대 값: 7
console.log(solutionImproved([3, 2, 1, 5])); // 기대 값: 6
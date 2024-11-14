// 문제 유형: [이진 탐색, 정렬, 배열]
/**
 * 문제 설명:
 * `items` 배열이 주어지며, 각 항목은 `[price, beauty]`로 가격과 아름다움을 나타냅니다. `queries` 배열의 각 쿼리에 대해
 * 가격이 해당 쿼리 이하인 아이템 중에서 가장 높은 아름다움 값을 찾습니다. 만약 쿼리 조건을 만족하는 아이템이 없으면 0을 반환합니다.
 * 
 * 제한 사항:
 * 1. 1 <= items.length, queries.length <= 10^5
 * 2. items[i].length == 2
 * 3. 1 <= pricei, beautyi, queries[j] <= 10^9
 * 
 * 입출력 예:
 * items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6] -> return [2,4,5,5,6,6]
 * items = [[1,2],[1,2],[1,3],[1,4]], queries = [1] -> return [4]
 * items = [[10,1000]], queries = [5] -> return [0]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 각 쿼리에 대해 조건에 맞는 아이템의 최대 아름다움 값을 반환합니다.
 * 2. 예제 #2: 같은 가격의 아이템이 여러 개 존재할 수 있으며, 조건에 맞는 최대 아름다움 값을 선택합니다.
 * 3. 예제 #3: 조건에 맞는 아이템이 없으면 0을 반환합니다.
 */

function solution(items, queries) {
    const map = new Map();

    // 가격을 기준으로 정렬하여 최대 아름다움 값을 관리
    items.sort((a, b) => a[0] - b[0]);

    // 가격에 대한 최대 아름다움 값을 저장
    for (let item of items) {
        const [price, beauty] = item;
        if (map.has(price)) {
            let max = Math.max(map.get(price), beauty);
            map.set(price, max);
        } else {
            map.set(price, beauty);
        }
    }
    
    // 가격과 해당 가격까지의 최대 아름다움 값을 저장할 배열 생성
    const prices = [];
    const beauties = [];
    let maxBeauty = 0;

    for (let [price, beauty] of map) {
        maxBeauty = Math.max(maxBeauty, beauty);
        prices.push(price);
        beauties.push(maxBeauty);
    }

    // 쿼리에 대해 이진 탐색을 사용하여 결과 계산
    const result = [];
    for (let query of queries) {
        const idx = binarySearch(prices, query);
        result.push(idx >= 0 ? beauties[idx] : 0);
    }

    return result;
}

// 이진 탐색 함수
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}

// 입출력 예시 테스트
console.log(solution([[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6])); // 기대 값: [2,4,5,5,6,6]
console.log(solution([[1,2],[1,2],[1,3],[1,4]], [1])); // 기대 값: [4]
console.log(solution([[10,1000]], [5])); // 기대 값: [0]

/**
 * 시간 복잡도:
 * O(n log n + m log n) - n개의 items를 정렬하는 데 O(n log n), 각 쿼리에서 이진 탐색을 수행하는 데 O(log n)이며, m은 queries의 길이입니다.
 * 
 * 공간 복잡도:
 * O(n) - 각 가격의 최대 아름다움 값을 저장하기 위해 배열과 해시맵을 사용하므로 O(n)입니다.
 */

/**
 * 개선할 점:
 * - 이 알고리즘은 최적의 시간 복잡도를 가지고 있으며, 개선할 사항이 없습니다.
 */
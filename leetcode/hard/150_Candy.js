// 문제 유형: [탐욕법 문제]

/**
 * 문제 설명:
 * `n`명의 아이들이 한 줄로 서 있으며, 각 아이는 정수 배열 `ratings`에 주어진 평점을 가지고 있습니다.
 * 당신은 다음 요구 사항을 충족하며 아이들에게 사탕을 나눠 주려 합니다.
 * 
 * 1. 각 아이는 적어도 하나의 사탕을 받아야 합니다.
 * 2. 더 높은 평점을 가진 아이는 이웃한 아이보다 더 많은 사탕을 받아야 합니다.
 * 
 * 이 조건을 만족하도록 아이들에게 사탕을 배분할 때, 필요한 최소 사탕 개수를 반환하세요.
 * 
 * 제한 사항:
 * 1. 1 <= ratings.length <= 2 * 10^4
 * 2. 0 <= ratings[i] <= 2 * 10^4
 * 
 * 입출력 예:
 * ratings = [1, 0, 2] -> return 5
 * ratings = [1, 2, 2] -> return 4
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 첫 번째, 두 번째, 세 번째 아이에게 각각 2, 1, 2개의 사탕을 배분합니다.
 * 2. 예제 #2: 첫 번째, 두 번째, 세 번째 아이에게 각각 1, 2, 1개의 사탕을 배분합니다.
 */

function solution(ratings) {
    const n = ratings.length;
    const arr = Array(n).fill(1);

    for (let i = 0; i < n - 1; i++) {
        if (ratings[i] < ratings[i + 1]) {
            arr[i + 1] = arr[i] + 1;
        }
    }
    
    for (let j = n - 1; j > 0; j--) {
        if (ratings[j] < ratings[j - 1]) {
            arr[j - 1] = Math.max(arr[j - 1], arr[j] + 1);
        }
    }
    
    return arr.reduce((acc, cur) => acc + cur, 0);
}

// 입출력 예시 테스트
console.log(solution([1, 0, 2])); // 기대 값: 5
console.log(solution([1, 2, 2])); // 기대 값: 4

/**
 * 시간 복잡도:
 * O(n) - ratings 배열을 두 번 순회하여 각각 사탕을 배분하므로 O(n)입니다.
 * 
 * 공간 복잡도:
 * O(n) - 사탕 개수를 저장할 배열을 사용하므로 O(n)입니다.
 */

/**
 * 개선할 점:
 * 현재의 코드가 탐욕적 접근 방식을 사용해 최적화된 상태이므로 추가적인 개선 여지는 거의 없습니다.
 */
// 문제 유형: [수학 문제, 로그 시간 복잡도 문제]
/**
 * 문제 설명:
 * 정수 n이 주어졌을 때, n!의 끝에 있는 0의 개수를 반환합니다.
 * 여기서 n!은 n * (n - 1) * ... * 3 * 2 * 1로 정의됩니다.
 * 
 * 제한 사항:
 * 1. 0 <= n <= 10^4
 * 2. n은 정수입니다.
 * 
 * 입출력 예:
 * n = 3 -> return 0
 * n = 5 -> return 1
 * n = 0 -> return 0
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 3! = 6이며, 끝에 0이 없습니다.
 * 2. 예제 #2: 5! = 120이며, 끝에 0이 1개 있습니다.
 * 3. 예제 #3: 0! = 1이며, 끝에 0이 없습니다.
 */

function solution(n) {
    let count = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}

// 입출력 예시 테스트
console.log(solution(3)); // 기대 값: 0
console.log(solution(5)); // 기대 값: 1
console.log(solution(0)); // 기대 값: 0

/**
 * 시간 복잡도:
 * O(log n) - 반복문은 n을 5로 나누며 실행되므로, 로그 시간 복잡도를 가집니다.
 * 
 * 공간 복잡도:
 * O(1) - 추가적인 메모리 사용 없이 count 변수만 사용합니다.
 */

/**
 * 개선할 점:
 * 현재 구현은 문제에 적합하며, 추가적인 개선이 필요하지 않습니다.
 */
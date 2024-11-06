// 문제 유형: [투 포인터 문제]

/**
 * 문제 설명:
 * 정수 배열 `height`가 주어지며, 이 배열의 길이는 `n`입니다. `i`번째 수직선의 두 끝점은 `(i, 0)`과 `(i, height[i])`로 주어집니다.
 * 이 수직선 중 두 개를 선택하여 x축과 함께 가장 큰 물을 담을 수 있는 "컨테이너"를 형성하십시오.
 * 이때, 컨테이너가 담을 수 있는 물의 최대량을 반환하십시오. 컨테이너는 기울일 수 없음을 유의하세요.
 * 
 * 제한 사항:
 * 1. n == height.length
 * 2. 2 <= n <= 10^5
 * 3. 0 <= height[i] <= 10^4
 * 
 * 입출력 예:
 * - 입력: height = [1,8,6,2,5,4,8,3,7]
 *   출력: 49
 *   설명: 배열 [1,8,6,2,5,4,8,3,7]로 표현된 수직선들 중에서, 최대 물의 양(파란색 부분)은 49입니다.
 * - 입력: height = [1,1]
 *   출력: 1
 */

function solution(height) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;

    while (start < end) {
        const width = end - start;
        const minHeight = Math.min(height[start], height[end]);

        const area = width * minHeight;

        max = Math.max(max, area);

        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return max;
}

/**
 * 시간 복잡도: O(n)
 * - 투 포인터를 사용하여 배열을 한 번만 순회하므로 시간 복잡도는 O(n)입니다.
 * 
 * 공간 복잡도: O(1)
 * - 상수 공간만 사용하므로 공간 복잡도는 O(1)입니다.
 */

/**
 * 개선할 점:
 * - 투 포인터 방식을 사용하여 최적화된 상태이므로 추가적인 개선점이 없습니다.
 */
// 문제 유형: [해시맵 문제, 행렬 문제, 그리디 알고리즘]
/**
 * 문제 설명:
 * 주어진 m x n 크기의 2진수 행렬 matrix에서, 어떤 열이든 선택하여 열에 포함된 모든 셀의 값을 뒤집을 수 있습니다
 * (0 -> 1, 1 -> 0). 이 작업을 반복했을 때 모든 값이 동일한 행의 최대 개수를 반환하세요.
 * 
 * 제한 사항:
 * 1. m == matrix.length
 * 2. n == matrix[i].length
 * 3. 1 <= m, n <= 300
 * 4. matrix[i][j]는 0 또는 1입니다.
 * 
 * 입출력 예:
 * matrix = [[0,1],[1,1]] -> return 1
 * matrix = [[0,1],[1,0]] -> return 2
 * matrix = [[0,0,0],[0,0,1],[1,1,0]] -> return 2
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 아무 값도 뒤집지 않은 상태에서 1개의 행이 모든 값이 동일합니다.
 * 2. 예제 #2: 첫 번째 열의 값을 뒤집으면 두 개의 행이 동일한 값이 됩니다.
 * 3. 예제 #3: 첫 번째와 두 번째 열을 뒤집으면 마지막 두 행이 동일한 값이 됩니다.
 */

function solution(matrix) {
    let map = new Map();
    for (let row of matrix) {
        let original = row.join('');
        let flipped = row.map(cell => 1 - cell).join('');
        let key = original < flipped ? original : flipped;
        map.set(key, (map.get(key) || 0) + 1);
    }
    return Math.max(...map.values());
}

// 입출력 예시 테스트
console.log(solution([[0, 1], [1, 1]])); // 기대 값: 1
console.log(solution([[0, 1], [1, 0]])); // 기대 값: 2
console.log(solution([[0, 0, 0], [0, 0, 1], [1, 1, 0]])); // 기대 값: 2

/**
 * 시간 복잡도:
 * O(m * n) - 각 행에 대해 열을 순회하고, 해시맵에 키를 업데이트합니다.
 * 
 * 공간 복잡도:
 * O(m) - 해시맵에 저장되는 키의 수는 최대 m개의 고유 행에 해당합니다.
 */

/**
 * 개선할 점:
 * - 문제 해결을 위해 모든 행에 대해 키를 생성합니다. 해시맵의 키 저장 방식이 최적화되어 있으므로 추가적인 개선은 필요하지 않습니다.
 */
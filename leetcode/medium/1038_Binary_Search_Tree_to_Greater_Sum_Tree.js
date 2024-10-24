// 문제 유형: 트리, 중위 순회, 재귀
/**
 * 문제 설명:
 * 주어진 이진 탐색 트리(BST)를 모든 노드의 값을 "그 노드보다 큰 값들의 합"으로 변환하는 **Greater Tree**로 변환하세요.
 * 즉, 각 노드의 값을 현재 노드 값과 그보다 큰 모든 노드들의 값의 합으로 대체해야 합니다.
 * 
 * 제한 사항:
 * 1. 트리의 노드 수는 1 이상 100 이하입니다.
 * 2. 노드의 값은 -10^4 이상 10^4 이하의 정수입니다.
 * 3. 이진 탐색 트리(BST)는 노드 값이 유일하다는 특성을 가집니다.
 * 
 * 입출력 예:
 * root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8] -> return [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 * root = [0,null,1] -> return [1,null,1]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 주어진 트리를 오른쪽에서 왼쪽으로 순회하면서 값을 누적하여 변환한 결과입니다.
 * 2. 예제 #2: 간단한 2노드 트리의 변환 결과입니다.
 */

function solution(root) {
    let sum = 0;
    function dfs(node) {
        if (node === null) return;

        dfs(node.right);
        sum += node.val;
        node.left = sum;
        dfs(node.left)
    }
    dfs(root);
    return root;
}

// 입출력 예시 테스트
console.log(solution([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])); // 기대 값: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
console.log(solution([0,null,1])); // 기대 값: [1,null,1]

/**
 * 시간 복잡도:
 * O(n) - 트리의 모든 노드를 한 번씩 방문하므로 n에 비례하는 시간이 소요됩니다.
 * 
 * 공간 복잡도:
 * O(h) - h는 트리의 높이로, 재귀 호출이 트리의 깊이만큼 스택에 쌓이기 때문에 h에 비례하는 공간이 필요합니다.
 */

/**
 * 개선할 점:
 * 현재 알고리즘은 최적화된 방법으로 모든 노드를 오른쪽부터 탐색하면서 처리합니다. 성능 개선의 여지는 적습니다.
 */
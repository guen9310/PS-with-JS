/**
 * 문제 유형: 이진 트리 탐색 문제, 재귀 탐색을 통한 값 변경
 * 
 * 문제 설명:
 * 주어진 이진 트리에서 각 노드의 값을 그 노드의 사촌들의 값의 합으로 바꾸는 문제입니다. 
 * 두 노드는 같은 깊이에 있고 부모가 다를 때 서로 사촌이라고 합니다. 
 * 루트 노드는 사촌이 없으므로 0으로 바뀝니다.
 * 
 * 제한 사항:
 * 1. 트리의 노드 수는 1 이상 10^5 이하입니다.
 * 2. 각 노드의 값은 1 이상 10^4 이하입니다.
 * 3. 트리에서 각 노드는 유일한 값을 가집니다.
 * 
 * 입출력 예:
 * root = [5, 4, 9, 1, 10, null, 7] -> return [0, 0, 0, 7, 7, null, 11]
 * root = [3, 1, 2] -> return [0, 0, 0]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1:
 *    - 1은 사촌 노드 7과 합을 공유하여 7로 바뀝니다.
 *    - 10은 사촌 노드 7과 합을 공유하여 7로 바뀝니다.
 *    - 7은 사촌 노드 1과 10을 합산하여 11로 바뀝니다.
 * 2. 예제 #2:
 *    - 모든 노드가 사촌이 없으므로 모두 0으로 바뀝니다.
 */

function solution(root) {
    function dfs(arr) {
        if (arr.length === 0) return;

        let sum = 0;

        for (let node of arr) {
            if (!node) continue;
            if (node.left) sum += node.left.val;
            if (node.right) sum += node.right.val;
        }

        let childArr = [];

        for (let node of arr) {
            let curSum = 0;

            if (node.left) curSum += node.left.val;
            if (node.right) curSum += node.right.val;

            if (node.left) {
                node.left.val = sum - curSum;
                childArr.push(node.left);
            }
            if (node.right) {
                node.right.val = sum - curSum;
                childArr.push(node.right);
            }
        }

        dfs(childArr);
    }

    root.val = 0;
    dfs([root]);

    return root;
};

// 입출력 예시 테스트
console.log(solution(new TreeNode(5, 
    new TreeNode(4, new TreeNode(1), new TreeNode(10)), 
    new TreeNode(9, null, new TreeNode(7))
))); // 기대 값: [0, 0, 0, 7, 7, null, 11]

console.log(solution(new TreeNode(3, new TreeNode(1), new TreeNode(2)))); // 기대 값: [0, 0, 0]

/**
 * 시간 복잡도:
 * O(n)
 * - 트리의 모든 노드를 한 번씩 방문하며, 각 레벨에서 노드를 업데이트하므로 시간 복잡도는 트리의 노드 수 n에 비례합니다.
 * 
 * 공간 복잡도:
 * O(n)
 * - 재귀 호출 시 호출 스택과 각 레벨별 노드를 저장하는 배열이 필요하므로 공간 복잡도는 노드 수에 비례합니다.
 */

/**
 * 개선할 점:
 * - 깊이 우선 탐색 대신 너비 우선 탐색(BFS)으로 접근하면 더 직관적인 해결 방법이 될 수 있습니다.
 */

function solutionImproved(root) {
    if (!root) return root;

    // BFS 탐색을 위해 큐 사용
    let queue = [root];
    root.val = 0; // 루트 노드는 사촌이 없으므로 0으로 설정

    while (queue.length) {
        let size = queue.length;
        let sum = 0;
        let levelNodes = [];

        // 현재 레벨에서 자식 노드들의 값을 합산
        for (let i = 0; i < size; i++){
            let node = queue[i];
            if (node.left) sum += node.left.val;
            if (node.right) sum += node.right.val;
            levelNodes.push(node); // 각 노드를 저장
        }

        // 자식 노드들의 값을 사촌들의 값으로 업데이트
        for (let i = 0; i < size; i++){
            let node = levelNodes[i];
            let curSum = 0;

            if (node.left) curSum += node.left.val;
            if (node.right) curSum += node.right.val;

            if (node.left) {
                node.left.val = sum - curSum;
                queue.push(node.left);
            }
            if (node.right) {
                node.right.val = sum - curSum;
                queue.push(node.right);
            }
        }

        // 큐에서 현재 레벨의 노드 제거
        queue = queue.slice(size);
    }

    return root;
}
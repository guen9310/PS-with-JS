// 문제 유형: [트리, 재귀]
/**
 * 문제 설명:
 * 이진 트리의 루트 노드 `root`가 주어질 때, 해당 트리의 최대 깊이를 반환하세요.
 * 최대 깊이는 루트 노드에서 가장 멀리 떨어진 리프 노드까지의 경로 상의 노드 수를 의미합니다.
 * 
 * 제한 사항:
 * 1. 트리의 노드 개수는 [0, 104] 범위입니다.
 * 2. 트리 노드는 왼쪽, 오른쪽 자식 노드를 가질 수 있으며, null 값일 수 있습니다.
 * 
 * 입출력 예:
 * root = [3,9,20,null,null,15,7] -> return 3
 * root = [1,null,2] -> return 2
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 루트 노드(3)에서 왼쪽(9), 오른쪽(20)을 따라 가장 멀리 떨어진 리프 노드(15, 7)까지 3단계입니다.
 * 2. 예제 #2: 루트 노드(1)에서 오른쪽(2)로 이동하며, 최대 깊이는 2입니다.
 */

function solution(root) {
    return traverse(root);
}

function traverse(node) {
    if (node === null) return 0;
    const left = traverse(node.left);
    const right = traverse(node.right);
    return Math.max(left, right) + 1;
}

// 입출력 예시 테스트
console.log(solution({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
    },
})); // 기대 값: 3

console.log(solution({
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
})); // 기대 값: 2

/**
 * 시간 복잡도:
 * - O(n): 트리의 모든 노드를 정확히 한 번 방문하기 때문입니다.
 * 
 * 공간 복잡도:
 * - O(h): 재귀 호출에 사용되는 콜 스택의 최대 깊이는 트리의 높이 `h`에 비례합니다.
 */

/**
 * 개선할 점:
 * - 본 문제는 최적화 여지가 적지만, 반복적으로 동일한 서브트리를 탐색하는 경우 메모이제이션을 고려할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(root) {
    if (root === null) return 0;
    const stack = [{ node: root, depth: 1 }];
    let maxDepth = 0;

    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        if (node !== null) {
            maxDepth = Math.max(maxDepth, depth);
            if (node.left) stack.push({ node: node.left, depth: depth + 1 });
            if (node.right) stack.push({ node: node.right, depth: depth + 1 });
        }
    }

    return maxDepth;
}

/** 
 * 개선된 시간 복잡도:
 * - O(n): 모든 노드를 순회하며 깊이를 계산합니다.
 * 
 * 개선된 공간 복잡도:
 * - O(h): 반복문 내에서 사용하는 스택의 최대 크기는 트리의 높이 `h`에 비례합니다.
 */
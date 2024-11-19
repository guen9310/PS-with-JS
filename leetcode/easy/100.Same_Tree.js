// 문제 유형: [트리, 재귀]
/**
 * 문제 설명:
 * 두 개의 이진 트리의 루트 노드 `p`와 `q`가 주어질 때, 두 트리가 동일한지 확인하는 함수를 작성하세요.
 * 두 이진 트리가 동일하려면 구조적으로 동일해야 하고, 각 노드의 값이 동일해야 합니다.
 * 
 * 제한 사항:
 * 1. 트리의 노드 개수는 [0, 104] 범위입니다.
 * 2. 트리 노드는 왼쪽, 오른쪽 자식 노드를 가질 수 있으며, null 값일 수 있습니다.
 * 
 * 입출력 예:
 * p = [1,2,3], q = [1,2,3] -> return true
 * p = [1,2], q = [1,null,2] -> return false
 * p = [1,2,1], q = [1,1,2] -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 두 트리는 구조적으로 동일하고, 각 노드 값도 동일하므로 true입니다.
 * 2. 예제 #2: 두 트리는 구조가 다르므로 false입니다.
 * 3. 예제 #3: 두 트리는 구조는 같지만, 노드 값이 다르므로 false입니다.
 */

function solution(p, q) {
    return isSameTree(p, q);
}

function isSameTree(p, q) {
    if (!p && !q) return true; // 두 노드가 모두 null인 경우
    if (!p || !q || p.val !== q.val) return false; // 한쪽만 null이거나 값이 다른 경우
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// 입출력 예시 테스트
console.log(solution({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
}, {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
})); // 기대 값: true

console.log(solution({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
}, {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
})); // 기대 값: false

console.log(solution({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 1, left: null, right: null },
}, {
    val: 1,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null },
})); // 기대 값: false

/**
 * 시간 복잡도:
 * - O(n): 트리의 모든 노드를 순회해야 하므로, `n`은 트리의 노드 수입니다.
 * 
 * 공간 복잡도:
 * - O(h): 재귀 호출에 사용되는 콜 스택의 최대 깊이는 트리의 높이 `h`에 비례합니다.
 */

/**
 * 개선할 점:
 * - 재귀 호출 대신 반복문을 사용하여 스택을 활용하면 공간 복잡도를 더 명확히 제어할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(p, q) {
    const stack = [[p, q]];
    while (stack.length > 0) {
        const [node1, node2] = stack.pop();
        if (!node1 && !node2) continue;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        stack.push([node1.right, node2.right], [node1.left, node2.left]);
    }
    return true;
}

/** 
 * 개선된 시간 복잡도:
 * - O(n): 트리의 모든 노드를 순회합니다.
 * 
 * 개선된 공간 복잡도:
 * - O(h): 명시적인 스택을 사용하며, 최대 크기는 트리의 높이 `h`입니다.
 */
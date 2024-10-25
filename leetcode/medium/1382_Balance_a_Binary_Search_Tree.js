// 문제 유형: [트리 문제, 재귀, 정렬 문제 등]
/**
 * 문제 설명:
 * 주어진 이진 탐색 트리(BST)를 균형 잡힌 이진 탐색 트리로 변환합니다. 균형 잡힌 트리는 모든 노드의 두 서브트리 깊이 차이가 1 이하인 트리입니다.
 * 입력 트리가 주어지면, 중위 순회를 통해 오름차순 배열로 변환한 후 해당 배열을 기반으로 균형 트리를 재구성해야 합니다.
 * 
 * 제한 사항:
 * 1. 노드의 개수는 1 이상, 10^4 이하입니다.
 * 2. 트리의 각 노드 값은 중복되지 않습니다.
 * 3. 가능한 정답이 여러 개일 경우, 그중 하나를 반환하면 됩니다.
 * 
 * 입출력 예:
 * Input: root = [1,null,2,null,3,null,4,null,null]
 * Output: [2,1,3,null,null,null,4]
 * Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
 *
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 * Explanation: Already balanced, so return as is.
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 불균형 트리 [1,null,2,null,3,null,4]를 균형 트리로 변환하여 반환합니다.
 * 2. 예제 #2: 트리 [2,1,3]는 이미 균형 잡혀 있으므로 그대로 반환합니다.
 */

function solution(root) {
    let result = [];
    function dfs(node) {
        if (node === null) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);

    function buildTree(nums) {
        if (nums.length === 0) return null;
        const mid = Math.floor(nums.length / 2);
        let node = new TreeNode(nums[mid]);
        node.left = buildTree(nums.slice(0, mid));
        node.right = buildTree(nums.slice(mid + 1));
        return node;
    }

    return buildTree(result);
}

// 입출력 예시 테스트
console.log(solution([1, null, 2, null, 3, null, 4])); // 기대 값: [2, 1, 3, null, null, null, 4]
console.log(solution([2, 1, 3])); // 기대 값: [2, 1, 3]


/**
 * 시간 복잡도:
 * 중위 순회를 통해 노드를 배열에 저장하는 작업은 O(N), 균형 트리를 재구성하는 작업 또한 O(N)이므로 전체 시간 복잡도는 O(N)입니다.
 * 
 * 공간 복잡도:
 * 재귀 호출로 인해 스택에 저장되는 최대 깊이와 배열의 크기 때문에 O(N)의 공간 복잡도를 가집니다.
 */

/**
 * 개선할 점:
 * 현재 배열을 통해 트리를 구성하는 과정에서 추가적인 공간이 사용됩니다. 
 * 만약 배열을 사용하지 않고 직접 균형 잡힌 트리를 생성하는 방법을 고려할 수 있다면 공간 복잡도를 최적화할 수 있을 것입니다.
 */

// 개선된 답변
function solutionImproved(root) {
    // 중위 순회로 트리의 모든 노드를 저장하여 균형을 맞출 배열 생성
    let nodes = [];
    function inOrderTraverse(node) {
        if (node === null) return;
        inOrderTraverse(node.left);
        nodes.push(node);
        inOrderTraverse(node.right);
    }
    inOrderTraverse(root);

    // 중위 순회에서 얻은 배열을 이용해 균형 잡힌 이진 탐색 트리 구성
    function buildBalancedTree(left, right) {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        let node = nodes[mid];
        node.left = buildBalancedTree(left, mid - 1);
        node.right = buildBalancedTree(mid + 1, right);
        return node;
    }

    return buildBalancedTree(0, nodes.length - 1); // 균형 잡힌 트리 반환
}

/** 
 * 개선된 시간 복잡도:
 * 중위 순회를 통한 트리 생성은 여전히 O(N)이지만, 배열 복사가 생략되어 시간 최적화가 약간 이루어졌습니다.
 * 
 * 개선된 공간 복잡도:
 * 중간 배열 복사가 없으므로 메모리 사용량이 줄어듭니다. 
 * 다만, `nodes` 배열 자체는 여전히 필요하므로 근본적인 O(N) 공간 복잡도는 유지됩니다.
 */
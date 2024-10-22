// 문제 유형: [트리 탐색 문제, BFS 문제]
/**
 * 문제 설명:
 * 이진 트리에서 각 레벨의 노드 값들의 합을 구한 후, 그중에서 k번째로 큰 값을 반환하는 문제입니다.
 * 트리가 비어 있거나 k번째로 큰 값이 존재하지 않으면 -1을 반환합니다.
 * 
 * 제한 사항:
 * 1. 트리의 노드 수는 1 이상 10^4 이하입니다.
 * 2. 노드의 값은 -10^5 이상 10^5 이하입니다.
 * 3. k는 1 이상 트리의 높이 이하입니다.
 * 4. 트리의 모든 노드는 정수 값을 가집니다.
 * 
 * 입출력 예:
 * root = [5, 8, 9, 2, 1, 3, 7, 4, 6], k = 2 -> return 18
 * root = [1], k = 1 -> return 1
 * root = [], k = 1 -> return -1
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 각 레벨의 합은 [5, 19, 26]입니다. 이 중에서 두 번째로 큰 값은 18입니다.
 * 2. 예제 #2: 트리에는 하나의 노드만 존재하므로 레벨 합은 [1]입니다. 첫 번째 값은 1입니다.
 * 3. 예제 #3: 트리가 비어 있으므로 -1을 반환합니다.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function solution(root, k) {
    const node = [root];
    const arr = [];
    while (node.length > 0) {
        const len = node.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            const current = node.shift();
            sum += current.val;

            if (current.left) node.push(current.left);
            if (current.right) node.push(current.right);
        }
        arr.push(sum);
    }
    arr.sort((a, b) => b - a);
    return arr[k - 1] ?? -1;
}

// 입출력 예시 테스트
// console.log(solution([5, 8, 9, 2, 1, 3, 7, 4, 6], 2)); // 기대 값: 18
// console.log(solution([1], 1)); // 기대 값: 1
// console.log(solution([], 1)); // 기대 값: -1

/**
 * 시간 복잡도:
 * 트리의 모든 노드를 한 번씩 방문하며, 각 레벨에서 합을 계산하고 배열에 저장한 후 정렬합니다.
 * 트리 순회: O(N)
 * 배열 정렬: O(N log N)
 * 전체 시간 복잡도: O(N log N)
 * 
 * 공간 복잡도:
 * BFS 탐색을 위한 큐의 최대 크기는 트리의 한 레벨에 있는 노드의 수와 같습니다.
 * 저장할 배열의 크기는 트리의 레벨 수와 같습니다.
 * 전체 공간 복잡도: O(N)
 */

/**
 * 개선할 점:
 * - 현재 코드는 모든 레벨의 합을 배열에 저장한 후 정렬하고 있습니다. 만약 k번째로 큰 값을 찾는 것이 목적이라면, 정렬을 거치지 않고 우선순위 큐를 사용하여 효율적으로 k번째로 큰 값을 찾을 수 있습니다.
 */

// 개선된 답변
function solutionImproved(root, k) {
    const node = [root];
    const levelSums = [];
    
    while (node.length > 0) {
        const len = node.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            const current = node.shift();
            sum += current.val;

            if (current.left) node.push(current.left);
            if (current.right) node.push(current.right);
        }
        levelSums.push(sum);
    }

    // 우선순위 큐 (Heap)을 사용하여 k번째로 큰 값을 효율적으로 찾는 방식
    const maxHeap = new MaxPriorityQueue();
    levelSums.forEach(sum => maxHeap.enqueue(sum));

    for (let i = 1; i < k; i++) {
        maxHeap.dequeue();
    }

    return maxHeap.front()?.element ?? -1;
}

/** 
 * 개선된 시간 복잡도:
 * 트리 순회: O(N)
 * 우선순위 큐를 사용한 k번째 큰 값 찾기: O(N log k)
 * 전체 시간 복잡도: O(N log k)
 * 
 * 개선된 공간 복잡도:
 * O(N) - 트리의 모든 노드를 탐색하는 큐와 레벨 합계를 저장하는 배열
 */
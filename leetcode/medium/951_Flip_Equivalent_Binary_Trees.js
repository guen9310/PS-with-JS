// 문제 유형: 재귀, 트리 탐색
/**
 * 문제 설명:
 * 이진 트리 T에 대해, 우리는 임의의 노드를 선택하고 왼쪽과 오른쪽 자식 서브트리를 서로 교환하는 '뒤집기(flip)' 연산을 정의할 수 있습니다.
 * 이진 트리 X는 이진 트리 Y와 flip equivalent(뒤집기 동등)입니다. 즉, 몇 번의 뒤집기 연산을 통해 X를 Y와 동일하게 만들 수 있으면 두 트리는 flip equivalent라고 합니다.
 * 두 이진 트리의 루트 root1과 root2가 주어졌을 때, 두 트리가 flip equivalent라면 true를, 그렇지 않으면 false를 반환하는 함수를 작성하세요.
 * 
 * 제한 사항:
 * 1. 트리의 노드 수는 0 이상 100 이하입니다.
 * 2. 각 노드의 값은 서로 다릅니다.
 * 3. 트리의 높이는 최대 100입니다.
 * 
 * 입출력 예:
 * root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7] -> return true
 * root1 = [], root2 = [] -> return true
 * root1 = [], root2 = [1] -> return false
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 우리는 값이 1, 3, 5인 노드에서 자식들을 뒤집어 root1을 root2와 같게 만들 수 있습니다.
 * 2. 예제 #2: 두 트리 모두 빈 트리이므로 flip equivalent입니다.
 * 3. 예제 #3: 하나의 트리만 빈 트리이므로 flip equivalent가 아닙니다.
 */

function flipEquiv(root1, root2) {
    if (root1 === null && root2 === null) return true;
    
    if (root1 === null || root2 === null || root1.val !== root2.val) return false;
    
    return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
           (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
}

// 입출력 예시 테스트
console.log(flipEquiv([1,2,3,4,5,6,null,null,null,7,8], [1,3,2,null,6,4,5,null,null,null,null,8,7])); // 기대 값: true
console.log(flipEquiv([], [])); // 기대 값: true
console.log(flipEquiv([], [1])); // 기대 값: false

/**
 * 시간 복잡도:
 * O(n) - 트리의 모든 노드를 한번씩 방문하며 비교하기 때문에, 트리의 노드 수 n에 비례합니다.
 * 
 * 공간 복잡도:
 * O(h) - h는 트리의 높이이며, 재귀 호출이 트리의 깊이만큼 스택에 쌓이므로 공간 복잡도는 트리의 높이에 비례합니다.
 */

/**
 * 개선할 점:
 * 현재 알고리즘은 이미 최적화된 형태로, 모든 노드를 한 번씩 방문하는 재귀 알고리즘입니다. 성능 개선 여지는 크지 않습니다.
 */

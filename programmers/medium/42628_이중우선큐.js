// 이중 우선순위 큐 문제
/**
 * 문제 설명:
 * 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조입니다.
 * 
 * 명령어	수신 탑(높이)
 * I 숫자	큐에 주어진 숫자를 삽입합니다.
 * D 1	큐에서 최댓값을 삭제합니다.
 * D -1	큐에서 최솟값을 삭제합니다.
 * 
 * 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0]을, 
 * 비어있지 않으면 [최댓값, 최솟값]을 반환하도록 solution 함수를 구현해주세요.
 * 
 * 제한사항:
 * - operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
 * - operations의 원소는 큐가 수행할 연산을 나타냅니다.
 * - 원소는 “명령어 데이터” 형식으로 주어집니다.
 * - 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
 * - 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
 * 
 * 입출력 예:
 * operations: ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]
 * return: [0,0]
 * 
 * operations: ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
 * return: [333, -45]
 * 
 * 입출력 예 설명:
 * - 예제 #1: 
 *   16과 -5643을 삽입합니다.
 *   최솟값을 삭제합니다. -5643이 삭제되고 16이 남아있습니다.
 *   최댓값을 삭제합니다. 16이 삭제되고 이중 우선순위 큐는 비어있습니다.
 *   따라서 [0, 0]을 반환합니다.
 * 
 * - 예제 #2:
 *   -45와 653을 삽입후 최댓값(653)을 삭제합니다. -45가 남아있습니다.
 *   -642, 45, 97을 삽입 후 최댓값(97), 최솟값(-642)을 삭제합니다. 
 *   이중 우선순위 큐에 -45, 45, 333이 남아있으므로, [333, -45]를 반환합니다.
 */

function solution(operations) {
    var answer = new Set();
    for(let operation of operations){
        const [c,n] = operation.split(' ');
        switch(c){
            case 'I':
                answer.add(+n);
                break;
            case 'D':
                if (answer.size === 0) continue;
                if(n === '-1'){
                    answer.delete(Math.min(...answer));
                }else{
                    answer.delete(Math.max(...answer));
                }
                break;
        }
    }
    const min = Math.min(...answer) | 0
    const max = Math.max(...answer) | 0
    return [max,min];
}

// 입출력 예시 테스트
console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])); // 기대 값: [0, 0]
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])); // 기대 값: [333, -45]

/**
 * 시간 복잡도:
 * - 삽입 연산은 O(1)입니다. (Set에 추가하는 것이므로)
 * - 삭제 연산은 O(n)입니다. (Math.min() 또는 Math.max() 호출에 의한 전체 탐색)
 * - 따라서 전체적으로 O(n^2)입니다. (n은 operations의 길이)
 * 
 * 공간 복잡도:
 * - O(n)입니다. (Set에 저장되는 숫자 개수에 따라)
 * 
 */
/**
 * 개선할 점:
 * - 정렬 과정에서 발생하는 비효율성을 줄이기 위해,
 * - 최소 힙과 최대 힙을 사용하는 더 효율적인 방법으로 구현할 수 있습니다.
 * - 이를 통해 삽입 및 삭제 연산의 시간 복잡도를 O(log n)으로 줄일 수 있습니다.
 * - 직접 최소 힙과 최대 힙을 구현하거나 라이브러리를 사용하면 연산 효율을 증가할 수 있습니다.
 */

function solutionImproved(operations) {
    const minHeap = []; // 최솟값을 위한 최소 힙
    const maxHeap = []; // 최댓값을 위한 최대 힙

    for (let operation of operations) {
        const [command, value] = operation.split(' ');

        if (command === 'I') {
            const num = parseInt(value);
            minHeap.push(num);
            maxHeap.push(-num); // 최대 힙은 음수로 저장
            minHeap.sort((a, b) => a - b); // 최소 힙 정렬
            maxHeap.sort((a, b) => a - b); // 최대 힙 정렬
        } else if (command === 'D') {
            if (value === '1' && maxHeap.length > 0) {
                maxHeap.shift(); // 최댓값 삭제
                minHeap.shift(); // 최소 힙에서 최댓값 삭제
            } else if (value === '-1' && minHeap.length > 0) {
                minHeap.shift(); // 최솟값 삭제
                maxHeap.shift(); // 최대 힙에서 최솟값 삭제
            }
        }
    }

    // 최종 결과를 반환합니다.
    if (maxHeap.length === 0 || minHeap.length === 0) {
        return [0, 0];
    } else {
        return [-maxHeap[0], minHeap[0]]; // 최댓값과 최솟값 반환
    }
}
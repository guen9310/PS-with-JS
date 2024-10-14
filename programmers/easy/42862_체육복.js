// 탐욕법 문제
/**
 * 문제 설명:
 * 학생들이 체육복을 도난당했을 때, 여벌 체육복을 가진 학생들이 앞뒤로 있는 학생들에게
 * 체육복을 빌려줘 최대한 많은 학생이 체육 수업을 들을 수 있도록 하는 문제입니다.
 * 체육복을 빌려줄 수 있는 범위는 자기 앞번호 또는 뒷번호에 해당하는 학생에게만 가능합니다.
 * 
 * 제한 사항:
 * 1. 전체 학생의 수는 2명 이상 30명 이하입니다.
 * 2. 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이며, 중복되는 번호는 없습니다.
 * 3. 여벌 체육복을 가져온 학생의 수는 1명 이상 n명 이하이며, 중복되는 번호는 없습니다.
 * 4. 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
 * 5. 여벌 체육복을 가져온 학생이 도난당한 경우, 남은 체육복이 하나이므로 다른 학생에게 빌려줄 수 없습니다.
 * 
 * 입출력 예:
 * n = 5, lost = [2, 4], reserve = [1, 3, 5] -> return 5
 * n = 5, lost = [2, 4], reserve = [3] -> return 4
 * n = 3, lost = [3], reserve = [1] -> return 2
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게
 *    체육복을 빌려주면 모든 학생이 수업을 들을 수 있습니다.
 * 2. 예제 #2: 3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 4명의 학생이 수업을 들을 수 있습니다.
 */

function solution(n, lost, reserve) {
    let total = n - lost.length;
    const reserveSet = new Set(reserve.sort((a,b) => a - b));
    const lostSet = new Set(lost.sort((a,b) => a - b));
    
    for (let l of lost) {
        if (reserveSet.has(l)) {
            total += 1;
            reserveSet.delete(l);
            lostSet.delete(l);
        }
    }
    
    for (let l of lostSet) {
        if (reserveSet.has(l - 1)) { 
            total += 1;
            reserveSet.delete(l - 1);
        } else if (reserveSet.has(l + 1)) {
            total += 1;
            reserveSet.delete(l + 1);
        }
    }
    return total;
}

// 입출력 예시 테스트
console.log(solution(5, [2, 4], [1, 3, 5])); // 기대 값: 5
console.log(solution(5, [2, 4], [3])); // 기대 값: 4
console.log(solution(3, [3], [1])); // 기대 값: 2


/**
 * 시간 복잡도:
 * - 정렬 작업에 대한 시간 복잡도는 **O(n log n)**입니다.
 * - 정렬 후 남은 작업은 **O(n)**이므로 전체 시간 복잡도는 **O(n log n)**이 됩니다.
 * 
 * 공간 복잡도:
 * - Set을 사용하여 n개의 요소를 저장하는 데 필요한 공간이므로, 최종 공간 복잡도는 **O(n)**입니다.
 */

/**
 * 개선할 점:
 * - 정렬된 상태를 이용해 탐색하는 경우, **앞번호(l - 1)**와 **뒷번호(l + 1)**를 우선적으로 확인하는 방식은 그대로 유지할 수 있습니다.
 * - 만약 정렬된 배열을 사용하고 있다면, 체육복을 빌려줄 때 앞 번호를 우선적으로 확인하는 전략을 사용할 수 있습니다. 이는 문제가 요구하는 바에 적합하며, 앞 번호가 없을 경우에만 뒷 번호를 확인하게 됩니다. 이런 방식은 탐색의 효율성을 높여 불필요한 탐색을 줄일 수 있습니다.
 * - 코드 가독성을 높이기 위해, 배열 순회 후 곧바로 탐색하는 대신, 각 상황에 맞는 명확한 변수 이름을 사용해 가독성을 높일 수 있습니다. 또한, 중복된 작업을 최소화하는 방식으로 구조화하는 것이 좋습니다.
 */

// 개선된 답변
function solutionImproved(n, lost, reserve) {
    // lost와 reserve를 먼저 정렬
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    // Set으로 변환하여 빠른 탐색 및 삭제 가능
    const reserveSet = new Set(reserve);
    const lostSet = new Set(lost);

    let total = n - lostSet.size;

    // 여벌 체육복을 가진 학생이 자기 자신에게 체육복을 빌려줄 수 있는 경우
    lost.forEach(l => {
        if (reserveSet.has(l)) {
            total++;  // 자신이 여벌을 가지고 있다면 수업 가능
            reserveSet.delete(l);  // 여벌 소모
            lostSet.delete(l);     // 잃어버린 리스트에서 제거
        }
    });

    // 여벌 체육복을 빌려줄 수 있는 경우
    lostSet.forEach(l => {
        if (reserveSet.has(l - 1)) {  // 앞 번호 학생에게 빌림
            total++;
            reserveSet.delete(l - 1);
        } else if (reserveSet.has(l + 1)) {  // 뒷 번호 학생에게 빌림
            total++;
            reserveSet.delete(l + 1);
        }
    });
    
    return total;
}
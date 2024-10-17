// 문자 탐색 문제
/**
 * 문제 설명:
 * 휴대폰 자판에서 주어진 keymap을 기반으로 특정 문자열을 작성할 때, 각 키를 최소 몇 번 눌러야 하는지 계산하는 문제입니다.
 * 
 * 제한 사항:
 * 1. keymap의 길이는 1 이상 100 이하입니다.
 * 2. keymap의 원소의 길이는 1 이상 100 이하입니다.
 * 3. keymap[i]는 i + 1번 키를 눌렀을 때 순서대로 입력되는 알파벳 대문자로 이루어져 있습니다.
 * 4. targets 배열의 길이는 1 이상 100 이하입니다.
 * 5. targets의 원소 길이는 1 이상 100 이하입니다.
 * 
 * 입출력 예:
 * keymap = ["ABACD", "BCEFD"], targets = ["ABCD", "AABB"] -> return [9, 4]
 * keymap = ["AA"], targets = ["B"] -> return [-1]
 * keymap = ["AGZ", "BSSS"], targets = ["ASA", "BGZ"] -> return [4, 6]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: "ABCD"를 작성하려면 총 9번의 키 입력이 필요하고, "AABB"는 4번의 입력이 필요합니다.
 * 2. 예제 #2: "B"는 keymap에 없으므로 -1을 반환합니다.
 * 3. 예제 #3: "ASA"는 4번, "BGZ"는 6번의 키 입력이 필요합니다.
 */

// 초기 로직
function solution(keymap, targets) {
    var answer = [];
    targets.forEach(target => {
        let total = 0;
        for(let i = 0; i < target.length; i++) {
            const char = target[i];
            let min = Infinity;
            keymap.forEach(keys => {
                const index = keys.indexOf(char);
                if (index !== -1) {
                    min = Math.min(min, index + 1);
                }
            });
            if (min === Infinity) {
                total = -1;
                break;
            } else {
                total += min;
            }
        }
        answer.push(total);
    });
    return answer;
}

// 입출력 예시 테스트 (초기 로직)
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // 기대 값: [9, 4]
console.log(solution(["AA"], ["B"])); // 기대 값: [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // 기대 값: [4, 6]

/**
 * 시간 복잡도:
 * 각 target 문자열에 대해 keymap의 모든 키를 탐색하므로 O(k * m * t * n) (k는 keymap의 길이, t는 target의 길이)입니다.
 * 
 * 공간 복잡도:
 * O(1) (추가적인 저장공간을 크게 사용하지 않음).
 */

/**
 * 개선할 점:
 * 매번 keymap을 탐색하는 것이 비효율적이므로, 각 문자를 누르기 위한 최소 횟수를 미리 계산해 두면 더 효율적인 접근이 가능합니다.
 */

// 개선된 로직
function solutionImproved(keymap, targets) {
    // 각 문자가 최소 몇 번 눌러야 하는지를 저장하는 Map을 생성
    const charMap = new Map();

    // keymap을 순회하며 문자를 눌러야 하는 최소 횟수를 미리 계산
    keymap.forEach((keys, i) => {
        for (let j = 0; j < keys.length; j++) {
            const char = keys[j];
            // 만약 이미 존재하는 문자가 있으면 최소값으로 갱신
            if (!charMap.has(char) || charMap.get(char) > j + 1) {
                charMap.set(char, j + 1);
            }
        }
    });

    const answer = targets.map(target => {
        let total = 0;
        for (let i = 0; i < target.length; i++) {
            const char = target[i];
            if (charMap.has(char)) {
                total += charMap.get(char);
            } else {
                // 문자를 찾을 수 없으면 -1을 반환
                return -1;
            }
        }
        return total;
    });

    return answer;
}

// 입출력 예시 테스트 (개선된 로직)
console.log(solutionImproved(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // 기대 값: [9, 4]
console.log(solutionImproved(["AA"], ["B"])); // 기대 값: [-1]
console.log(solutionImproved(["AGZ", "BSSS"], ["ASA", "BGZ"])); // 기대 값: [4, 6]

/**
 * 시간 복잡도:
 * keymap을 사전 처리하는 데 O(k * m) (k는 keymap의 길이, m은 각 keymap 원소의 길이),
 * targets를 처리하는 데 O(t * n) (t는 targets의 길이, n은 각 target 원소의 길이)이 소요됩니다.
 * 따라서 전체 시간 복잡도는 O(k * m + t * n)입니다.
 * 
 * 공간 복잡도:
 * 각 문자를 저장하는 Map의 크기에 따라 O(문자 수)입니다.
 */

/**
 * 개선할 점:
 * 이 버전에서는 keymap의 중복 계산을 방지하기 위해 미리 사전 처리를 했습니다. 
 * 만약 keymap의 크기가 크거나 자주 바뀌는 경우, 동적으로 처리할 수 있는 방법도 고려할 수 있습니다.
 */
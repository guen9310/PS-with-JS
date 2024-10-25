// 문제 유형: [탐욕법 문제, 정렬]

/**
 * 문제 설명:
 * 폴더 경로 목록이 주어졌을 때, 모든 서브 폴더를 제거하고 남은 최상위 폴더 목록을 반환하는 문제입니다.
 * 예를 들어, "/a/b"는 "/a"의 서브 폴더이므로 "/a"만 남기고 "/a/b"는 제거됩니다.
 * 폴더는 '/'로 시작하고, 영어 소문자로만 구성됩니다.
 * 
 * 제한 사항:
 * 1. 1 <= folder.length <= 4 * 10^4
 * 2. 2 <= folder[i].length <= 100
 * 3. folder[i]는 영어 소문자와 '/'만 포함합니다.
 * 4. 각 폴더 경로는 '/'로 시작하며 고유합니다.
 * 
 * 입출력 예:
 * folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"] -> return ["/a", "/c/d", "/c/f"]
 * folder = ["/a", "/a/b/c", "/a/b/d"] -> return ["/a"]
 * folder = ["/a/b/c", "/a/b/ca", "/a/b/d"] -> return ["/a/b/c", "/a/b/ca", "/a/b/d"]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: "/a/b"는 "/a"의 서브 폴더이며, "/c/d/e"는 "/c/d"의 서브 폴더이므로 제거됩니다.
 * 2. 예제 #2: "/a/b/c"와 "/a/b/d"는 "/a"의 서브 폴더이므로 "/a"만 남습니다.
 * 3. 예제 #3: 모든 폴더는 독립적이므로 그대로 유지됩니다.
 */

function removeSubfolders(folder) {
    folder.sort();

    const result = new Set();

    folder.forEach(f => {
        if (![...result].some(parent => f.startsWith(parent + '/'))) {
            result.add(f);
        }
    });

    return [...result];
}

// 입출력 예시 테스트
console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"])); // 기대 값: ["/a", "/c/d", "/c/f"]
console.log(removeSubfolders(["/a", "/a/b/c", "/a/b/d"])); // 기대 값: ["/a"]
console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"])); // 기대 값: ["/a/b/c", "/a/b/ca", "/a/b/d"]

/**
 * 시간 복잡도:
 * - 정렬: O(n log n)
 * - Set에 대한 반복 및 검사: O(n^2)
 * 
 * 공간 복잡도:
 * - 폴더 경로를 저장하는 Set 사용으로 O(n)
 */

/**
 * 개선할 점:
 * 현재 Set의 배열 변환과 some을 사용한 startsWith 검사로 인해 O(n^2) 복잡도가 발생할 수 있습니다. 
 * 이러한 구조를 Trie나 다른 최적화 기법을 사용하여 최상위 폴더 검사 시 O(n) 복잡도로 줄일 수 있는 방안이 있습니다.
 */

// 개선된 답변
function removeSubfoldersImproved(folder) {
    folder.sort();
    const result = [];

    folder.forEach(f => {
        // result의 마지막 폴더가 현재 폴더의 상위 폴더인지 확인
        if (result.length === 0 || !f.startsWith(result[result.length - 1] + '/')) {
            result.push(f); // 상위 폴더가 아니면 result에 추가
        }
    });

    return result;
}

/** 
 * 개선된 시간 복잡도:
 * - 정렬: O(n log n)
 * - 최상위 폴더 검사: O(n)
 * 
 * 개선된 공간 복잡도:
 * - 배열 사용으로 O(n)
 */
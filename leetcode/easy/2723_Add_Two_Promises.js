// 탐욕법 문제
/**
 * 문제 설명:
 * 두 개의 프로미스 `promise1`과 `promise2`가 주어집니다. 이 두 프로미스는 각각 숫자로 resolve됩니다. 
 * 반환된 새로운 프로미스는 이 두 숫자의 합으로 resolve되어야 합니다.
 * 
 * 제한 사항:
 * - `promise1`과 `promise2`는 숫자로 resolve됩니다.
 * 
 * 입출력 예:
 * promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
 * promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60)) 
 * -> return Promise.resolve(7)
 * 
 * promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
 * promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
 * -> return Promise.resolve(-2)
 * 
 * 입출력 예 설명:
 * - 첫 번째 예제에서는 2와 5를 더한 7을 반환하는 새로운 프로미스가 resolve됩니다.
 * - 두 번째 예제에서는 10과 -12를 더한 -2를 반환하는 새로운 프로미스가 resolve됩니다.
 */

async function solution(promise1, promise2) {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    return result1 + result2;
}

// 입출력 예시 테스트
console.log(solution(
    new Promise(resolve => setTimeout(() => resolve(2), 20)), 
    new Promise(resolve => setTimeout(() => resolve(5), 60))
)); // 기대 값: 7

console.log(solution(
    new Promise(resolve => setTimeout(() => resolve(10), 50)), 
    new Promise(resolve => setTimeout(() => resolve(-12), 30))
)); // 기대 값: -2

/**
 * 시간 복잡도:
 * - 프로미스의 개수와 무관하게 **O(1)**입니다.
 * 
 * 공간 복잡도:
 * - 반환된 배열과 결과를 처리하는 데 필요한 상수 공간만을 사용하므로 **O(1)**입니다.
 */

/**
 * 개선할 점:
 * -  개선할 점은 거의 없으며, 현재의 방식은 이 문제를 해결하는 데 있어 최적화된 방식입니다. 
 */
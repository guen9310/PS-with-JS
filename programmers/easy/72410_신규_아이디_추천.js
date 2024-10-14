/**
 * 문제 설명:
 * 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞지 않는 경우, 
 * 유사하면서 규칙에 맞는 아이디를 추천하는 프로그램을 작성해야 합니다. 
 * 주어진 7단계 처리 과정을 통해 입력된 아이디를 규칙에 맞게 변환합니다.
 * 
 * 1. 모든 대문자를 소문자로 변환.
 * 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 문자 제거.
 * 3. 연속된 마침표(.)를 하나의 마침표로 치환.
 * 4. 마침표(.)가 처음이나 끝에 위치하면 제거.
 * 5. 빈 문자열일 경우 "a"로 대체.
 * 6. 길이가 16자 이상이면 첫 15자만 사용하고 끝에 위치한 마침표는 제거.
 * 7. 길이가 2자 이하라면 마지막 문자를 반복해서 길이를 3으로 맞춤.
 * 
 * 제한 사항:
 * 1. new_id는 길이 1 이상 1,000 이하의 문자열.
 * 2. new_id는 대문자, 소문자, 숫자, 특수문자로 구성되며, 사용할 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 입니다.
 * 
 * 입출력 예:
 * new_id = "...!@BaT#*..y.abcdefghijklm" -> return "bat.y.abcdefghi"
 * new_id = "z-+.^." -> return "z--"
 * new_id = "=.=" -> return "aaa"
 * new_id = "123_.def" -> return "123_.def"
 * new_id = "abcdefghijklmn.p" -> return "abcdefghijklmn"
 * 
 * 입출력 예 설명:
 * 예제 #1: 대문자를 소문자로 변환하고, 특수문자를 제거하며 규칙에 맞게 변환된 최종 결과는 "bat.y.abcdefghi" 입니다.
 * 예제 #2: 특수문자를 제거하고, 연속된 마침표를 치환하여 "z--"로 변환되었습니다.
 * 예제 #3: 빈 문자열이 "aaa"로 변환되었습니다.
 */


function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
    new_id = new_id.replace(/\.+/g, '.');
    new_id = new_id.replace(/^\.|\.$/g, '');
    new_id = new_id.slice(0,15);
    new_id = new_id.replace(/\.$/, '');
    
    if(new_id === ''){
        return 'aaa'
    }
    while(new_id.length < 3){
        new_id = new_id + new_id[new_id.length -1];
    }
    var answer = new_id;
    return answer;
}

// 입출력 예시 테스트
console.log(solution("...!@BaT#*..y.abcdefghijklm")); // 기대 값: "bat.y.abcdefghi"
console.log(solution("z-+.^.")); // 기대 값: "z--"
console.log(solution("=.=")); // 기대 값: "aaa"
console.log(solution("123_.def")); // 기대 값: "123_.def"
console.log(solution("abcdefghijklmn.p")); // 기대 값: "abcdefghijklmn"

/**
 * 시간 복잡도:
 * - 가장 큰 시간 복잡도를 차지하는 부분이 여러 번 등장하지만, 모든 연산이 입력 길이 n에 비례하므로 최종 시간 복잡도는 **O(n)**입니다.
 * 
 * 공간 복잡도:
 * - new_id는 기존 문자열을 여러 번 변환하여 새로운 문자열을 생성하지만, 추가적으로 배열이나 객체를 사용하지 않으므로 공간 복잡도는 **O(1)**입니다.
 * - 반복문이나 배열을 새롭게 생성하지 않으므로 메모리 사용량은 입력 크기와 관계없이 일정합니다.

 */

/**
 * 개선할 점:
 * - 여러 번의 replace 연산을 하나의 정규 표현식으로 묶을 수 있다면 성능을 향상시킬 수 있습니다.
 * - 변수의 상태 변화를 줄이기 위해 각 변환을 별도의 함수로 분리하거나, 처리 순서를 명확히 하는 방식으로 리팩터링할 수 있습니다.
 * - 마침표 제거 부분이나 slice(0,15) 이후 마지막 마침표 제거가 중복된 연산일 수 있으므로, 최적화할 수 있는 부분을 찾아 개선할 수 있습니다.
 */

// 개선된 답변
function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
        .slice(0,15)
        .replace(/\.$/, '');
    
    if(new_id === '') new_id = 'aaa'
    while(new_id.length < 3){
        new_id = new_id + new_id[new_id.length -1];
    }
    return new_id;
}
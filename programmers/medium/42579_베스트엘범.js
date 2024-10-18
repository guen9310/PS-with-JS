/**
 * 문제 유형: 탐욕법 문제
 * 
 * 문제 설명:
 * 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 * 
 * 제한 사항:
 * 1. genres[i]는 고유번호가 i인 노래의 장르입니다.
 * 2. plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 * 3. genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 * 4. 장르 종류는 100개 미만입니다.
 * 5. 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 * 6. 모든 장르는 재생된 횟수가 다릅니다.
 * 
 * 입출력 예:
 * genres = ["classic", "pop", "classic", "classic", "pop"], plays = [500, 600, 150, 800, 2500] -> return [4, 1, 3, 0]
 * genres = ["classic", "classic", "pop"], plays = [500, 600, 1500] -> return [2, 1]
 * 
 * 입출력 예 설명:
 * 1. 예제 #1: 장르별로 가장 많이 재생된 곡을 먼저 고르고, 각 장르 내에서 재생된 횟수가 가장 많은 곡을 선택한 후, 재생 횟수가 동일한 경우 고유 번호가 낮은 곡을 선택합니다.
 * 2. 예제 #2: pop 장르에서 가장 많이 재생된 곡과 classic 장르에서 선택된 곡들을 반환합니다.
 */

function solution(genres, plays) {
    var answer = [];
    const genreMap = new Map();
    const totalPlaysMap = new Map();

    // 장르별 노래와 재생 횟수 저장
    genres.forEach((g, i) => {
        if (!genreMap.has(g)) {
            genreMap.set(g, []);
            totalPlaysMap.set(g, 0);
        }
        genreMap.get(g).push({ index: i, play: plays[i] });
        totalPlaysMap.set(g, totalPlaysMap.get(g) + plays[i]);
    });

    const sortedGenres = [...totalPlaysMap.entries()].sort((a, b) => b[1] - a[1]);

    sortedGenres.forEach(([genre]) => {
        const songs = genreMap.get(genre);


        songs.sort((a, b) => b.play - a.play || a.index - b.index);
        answer.push(songs[0].index);
        if (songs[1]) answer.push(songs[1].index);
    });

    return answer;
}

/**
 * 시간 복잡도:
 * O(n log n) - 장르별로 정렬하는 단계와 장르 내에서 노래를 정렬하는 단계가 포함됩니다.
 * 
 * 공간 복잡도:
 * O(n) - 입력 배열의 크기에 비례하는 추가 메모리가 필요합니다.
 */

/**
 * 개선할 점:
 * - Object를 사용하여 Map 대신 가독성과 코드 간결성을 향상할 수 있습니다.
 * - 불필요한 조건문을 제거하여 정렬 조건에 통합할 수 있습니다.
 */

// 개선된 답변
function solutionImproved(genres, plays) {
    const genreMap = {};
    const totalPlaysMap = {};

    // 1. 장르별로 노래와 재생 횟수 저장
    genres.forEach((genre, i) => {
        if (!genreMap[genre]) {
            genreMap[genre] = [];
            totalPlaysMap[genre] = 0;
        }
        genreMap[genre].push({ index: i, play: plays[i] });
        totalPlaysMap[genre] += plays[i];
    });

    // 2. 장르별 총 재생 횟수로 정렬
    const sortedGenres = Object.entries(totalPlaysMap).sort((a, b) => b[1] - a[1]);

    const answer = [];

    // 3. 장르 내에서 재생 횟수로 노래 정렬 후 베스트 2곡 선택
    sortedGenres.forEach(([genre]) => {
        const songs = genreMap[genre];

        // 재생 횟수로 내림차순, 재생 횟수 같으면 인덱스 오름차순
        songs.sort((a, b) => b.play - a.play || a.index - b.index);

        // 가장 재생 횟수가 많은 두 곡을 answer에 추가
        answer.push(songs[0].index);
        if (songs.length > 1) answer.push(songs[1].index);
    });

    return answer;
}

/** 
 * 개선된 시간 복잡도:
 * O(n log n) - 정렬 단계에서 성능은 그대로 유지됩니다.
 * 
 * 개선된 공간 복잡도:
 * O(n) - 입력 배열의 크기와 동일한 공간이 필요합니다.
 */
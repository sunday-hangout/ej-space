/**
 * 해시 - 베스트 앨범
 * 
 * @param {장르} genres 
 * @param {재생 횟수} plays 
 */
function solution(genres, plays) {
    let answer = [];
    let album = {};
    // {'장르': {
    //     total: '총 재생 횟수', 
    //     list: [{
    //         no: '고유번호', 
    //         time: '재생 횟수'
    //     }]
    // }}
    genres.map((genre, idx) => {
        const time = plays[idx];
        album[genre] = album[genre] ? 
        {'total': album[genre]['total'] += time, 'list': [...album[genre]['list'], {'no': idx, 'time': time}]} : 
        {'total': time, 'list': [{'no': idx, 'time': time}]}; 
    });

    // total 내림차순 정렬
    let sortedAlbum = [];
    // [{total: x, list: [] }, ...]     장르 이름은 필요 없으므로 제외하고 재정렬한다.
    Object.keys(album).map(key => {
        sortedAlbum.push(album[key]);
    });
    sortedAlbum.sort((a, b) => b.total - a.total);
    // time 내림차순 정렬
    sortedAlbum.map(ab => {
        ab.list.sort((a, b) => b.time - a.time);
    });
    
    sortedAlbum.map(album => {
        // ** 문제 유의 ** 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
        let len = album.list.length > 1 ? 2 : 1;
        for (let i = 0; i < len; i++) {
            answer.push(album.list[i].no);
        }
    });

    return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
// [4, 1, 3, 0]
/**
 * 스택/큐 - 기능 개발
 * 
 * @param {Array} progresses 작업 진도
 * @param {Array} speeds 작업 속도
 */
function solution(progresses, speeds) {
    let answer = [];
    let period = [];    // 7, 3, 9
    progresses.map((p, idx) => {
        const left = 100 - p;
        const days = Math.ceil(left/speeds[idx]);
        period.push(days);
    });

    return answer;
}

solution([93,30,55], [1,30,5]);
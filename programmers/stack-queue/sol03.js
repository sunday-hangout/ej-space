/**
 * 스택/큐 - 기능 개발
 * 각 가능의 현재 작업 진도와 개발 속도에 따라 각 배포마다 몇 개의 기능을 배포할 수 있는지 알아내보자
 * 
 * @param {Array} progresses 작업 진도
 * @param {Array} speeds 작업 속도
 */
function solution(progresses, speeds) {
    let answer = [];
    
    // 작업 완료에 필요한 기간이 담긴 배열 ex) [7, 3, 9]
    let daysLeftArr = progresses.map((p, idx) => {
        const left = 100 - p;
        return Math.ceil(left/speeds[idx]);
    });

    while(daysLeftArr.length > 0){
        const first = daysLeftArr.shift();
        const biggerIndex = daysLeftArr.findIndex(days => days > first);
        console.log(daysLeftArr, first, biggerIndex);

        if(biggerIndex > -1){
            answer.push(biggerIndex + 1);   // 자신 인덱스도 포함이기 때문에 + 1
            daysLeftArr.splice(0, biggerIndex);
        }else{
            answer.push(daysLeftArr.length + 1);
            daysLeftArr = [];   //   while 문을 끝낸다
        }

        console.log('answer =>', answer);
    }

    
    return answer;
}

solution([93,30,55], [1,30,5]);
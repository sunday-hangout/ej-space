/**
 * 해시 - 완주하지 못한 선수 level 1
 * 마라톤에 참여한 선수들의 배열과 완주한 선수들의 배열을 비교해서 완주하지 못한 선수들의 이름을 구하라.
 * 
 * @param {Array} participant 
 * @param {Array} completion 
 */
function solution(participant, completion) {
    let answer = '';
    const newObj = completion.reduce((acc, c) => {
        acc[c] = acc[c] ? acc[c] + 1 : 1;
        return acc;
    }, {});
    
    answer = participant.find(el => {
        if(newObj[el]){
            newObj[el] -= 1
        }else{
            return true;
        }
    });
    return answer;
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

solution(participant, completion);
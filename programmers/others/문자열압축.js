/**
 * 문자열 압축
 * 모든 경우의 수 계산하기
 * 
 * @param {string} s 
 */
function solution(s) {
    const length = s.length;
    let answer = length;

    for (let i = 1; i <= Math.floor(length / 2); i++) {
        let count = 1;
        let resultStr = "";
        let tempStr = s.substr(0, i);   // 이전 비교 문자

        for (let j = i; j <= length; j += i) {
            let subTempStr = s.substr(j, i);    // 현재 비교 문자

            console.log(tempStr + '/' + subTempStr);

            if (tempStr === subTempStr) {   // 비교 문자가 같으면 count 만 증가
                count++;
            } else {
                // count 가 1일 경우 count 생략
                count = count > 1 ? count.toString() : '';
                resultStr += count + tempStr;

                tempStr = subTempStr;   // 다음 문자열과 비교하기 위함.
                count = 1;  // count 초기화
                
                console.log('===>'+resultStr);
                
            }
        }

        if(tempStr){
            count = count > 1 ? count : '';
            resultStr += count + tempStr
        }

        // 최소값으로 갱신
        answer = Math.min(answer, resultStr.length);
        // console.log("========= answer =>" + answer + "/" + resultStr);
        console.log("=======================");
    }

    return answer;
}

solution("aabbaccc");   // 7
// solution("ababcdcdababcdcd");   // 9
// solution("abcabcdede");     // 8
// solution("xababcdcdababcdcd");  // 17
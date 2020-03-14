/**
 * 스택/큐 - 탑
 * 탑은 왼쪽으로만 레이저를 송신하고, 송신한 탑보다 높은 탑에서만 수신한다.
 * 각 탑의 높이의 배열을 이용하여 신호를 몇 번째 탑에서 받았는지 구하라.
 * 
 * @param {Array} heights 
 */
function solution(heights) {
    let answer = [];
    let temp = [];

    let n = heights.length;   // 배열의 길이
    while(n > 0){
        let curr = heights.pop();

        let i = n - 1;  // 몇 번째 탑에서 신호를 받았는지 알기 위한 변수
        while(i >= 0){
            if(curr < heights[i]){
                temp.push(i + 1);   // 현재 탑의 높이보다 큰 탑이 있다면, i + 1
                break;
            }else if(i == 0){
                temp.push(0);
            }
            i--;
        }

        n--;
    }

    answer = temp.reverse();
    return answer;
}

solution([6,9,5,7,4]);
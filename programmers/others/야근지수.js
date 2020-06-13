/**
 * 야근 지수
 * 야근 피로도 = 남은 일의 작업량^2
 * N시간 동안 야근 피로도를 최소화한 값을 구하라.
 * 
 * @param {number} n 퇴근까지 남은 N시간
 * @param {number[]} works 일에 대한 작업량
 */
function solution(n, works) {
    let answer = 0;

    const length = works.length - 1;

    const sum = works.reduce((prev, curr) => prev + curr, 0);
    // 야근할 필요가 없는 경우
    if (n >= sum) {
        return answer;
    }

    for (let i = 0; i < n; i++) {
        works = works.sort((a, b) => a - b);
        works[length] -= 1;
        
        console.log(i, works);

        //같은 작업량 한 번에 처리하기
        for (let j = length - 1; j >= 0; j--) {
            if(works[length] === works[j]){
                i += 1;
                if(i === n){    // 퇴근까지 남은 시간이 0이라면
                    break;
                }
                works[j] -= 1;
            }
        }

    }
    
    answer = works.reduce((prev, curr) => prev + curr * curr, answer);

    console.log('답 :' + answer, works);

    return answer;
}

// solution(4, [4, 3, 3]); // 12
// solution(1, [2, 1, 2]); // 6
// solution(3, [1, 1]); // 0
// solution(5, [2,3,3,4]);
solution(15, [11,5,3,2,1]); // 11, [1,1,2,2,1]
// solution(6, [2,2,2]);   // 0
/**
 * H-Index : 과학자의 생산성과 영향력을 나타내는 지표.
 * 어떤 과학자가 발표한 논문 n편 중, "h번 이상 인용된 논문이 h편 이상"이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 * 참고) https://caution-dev.tistory.com/11
 * 
 * @param {Array} citations 논문의 인용 횟수
 */
function solution(citations) {
    let answer = 0;

    citations.sort((a, b) => b - a).map((citat, idx) => {
        // "h번 이상 인용된 논문이 h편 이상"에 초점을 맞춘다.
        // 인용 횟수가 idx 이상인 논문의 수 VS 인용 횟수가 idx 이하인 논문의 수
        // idx 을 0부터 늘려가면서 비교한다.
        // 내림차순 정렬이기 때문에
        // 현재 idx 앞에 있는 논문들은 인용횟수가 idx 보다 크다.
        // 또한 나머지 요소들 모두 idx 보다 작다.
        if(citat > idx){
            answer++;
        }
    });

    console.log(answer);

    return answer;    
}

// solution([10, 50, 100])
// solution([0, 6, 3, 1, 5])
// solution([4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6])
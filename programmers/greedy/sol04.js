/**
 * 구명보트
 * 
 * @param {Array} people 사람들의 몸무게
 * @param {*} limit 무게 제한
 */
function solution(people, limit) {
    let answer = 0;
    
    const length = people.length;
    people.sort((a, b) => a - b);
    
    let count = 0, lightest = 0, heaviest = length - 1;
    while (lightest < heaviest) {
        if(people[lightest] + people[heaviest] <= limit){
            count += 1;
            lightest += 1;
            heaviest -= 1;
        }else{
            heaviest -= 1;
        }
    }

    answer = length - count;
    console.log(answer, lightest, heaviest);
        
    return answer;
}

solution([70, 50, 80, 50], 100);
// solution([70, 80, 50], 100);
// solution([10,20,30,40,50,60,70,80,90], 100);    //5
// solution([40,40,40], 100);
// solution([50, 60, 70, 60, 110], 240);
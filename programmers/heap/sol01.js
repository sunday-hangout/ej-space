/**
 * 더 맵게
 * 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
 * 
 * @param {Array} scoville Leo가 가진 음식의 스코빌 지수를 담은 배열
 * @param {number} k 원하는 스코빌 지수 K
 */
function solution(scoville, k) {
    let answer = 0; // 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수

    const tempScoville = new Array([scoville]);
    while(scoville.some(scovi => scovi >= k)){
        const minScovi = Math.min(...scoville);
        const idx = scoville.indexOf(minScovi);
        tempScoville.splice(idx, 1);
        const secMinScovi = Math.min(...tempScoville);
        const secIdx = scoville.indexOf(secMinScovi);

        

        console.log(minScovi, secMinScovi, scoville);
        
    }

    scoville.map((scovi, idx) => {
        const prevScovi = scoville[idx - 1];
        // console.log(scovi, prevScovi);
        let mixed = 0;

        // if(scovi < k){
        //     if(covi > prevScovi){
        //         mixed = prevScovi + (scovi * 2)
        //     }else{
        //         mixed = 
        //     }
        // }
    })
    
    return answer;  
}

solution([1, 2, 3, 9, 10, 12], 7);
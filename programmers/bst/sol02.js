/**
 * 입국심사
 * 모든 사람이 최소의 시간으로 심사를 받게 하라
 * 
 * @param {number} n 입국심사를 기다리는 사람
 * @param {number[]} times 심사관 배열
 */
function solution(n, times) {
    return s(n, times);
}

var floor = n => Math.floor(n);

function s(n, times) {
    var min = 0, max = n * Math.max(...times);
    // max : 느린 심사관이 모든 사람들을 심사하는 경우
    // min = 0, max = 60;

    while (min <= max) {
        var mid = floor((min + max) / 2);
        var sum = times.reduce((acc, cur) => acc += floor(mid / cur), 0);
        // mid / cur : 심사관 한 명당 맡을 수 있는 입국자 수

        if (n <= sum) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
        
        console.log(mid, sum, min, max);
        
    }

    return min;
}


solution(6, [7, 10]);
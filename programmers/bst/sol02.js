/**
 * 입국심사
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

    while (min <= max) {
        var mid = floor((min + max) / 2);
        var maxInMid = times.reduce((acc, cur) => acc += floor(mid / cur), 0);
        if (n <= maxInMid) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return min;
}



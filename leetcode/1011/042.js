/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftIdx = 0, rightIdx = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let answer = 0;

    while (leftIdx < rightIdx) {
        if (height[leftIdx] < height[rightIdx]) {
            height[leftIdx] >= leftMax ? (leftMax = height[leftIdx]) : answer += (leftMax - height[leftIdx]);
            // update leftMax
            ++leftIdx;
        } else {
            height[rightIdx] >= rightMax ? rightMax = height[rightIdx] : answer += (rightMax - height[rightIdx]);
            // update rightMax
            --rightIdx;
        }
    }
    
    return answer;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6);
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums){
    const max = Math.max(...nums);

    for (let i = 1; i <= max + 1; i++) {
        if(nums.indexOf(i) === -1){
            return i;
        }
    }

    return 1;
}

firstMissingPositive([1,2,0]);
// firstMissingPositive([3,4,-1,1]);
// firstMissingPositive([]);
// firstMissingPositive([-5]);
// firstMissingPositive([0,2,2,1,1]);
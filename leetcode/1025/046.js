/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    let answer = [];

    go([], new Array(nums.length).fill(false));

    function go(arr, checked) {
        if(arr.length === nums.length){
            answer.push(Array.from(arr)); // deep copy
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if(checked[i]){
                continue;
            }

            const el = nums[i];
            arr.push(el);
            
            checked[i] = true;
            
            go(arr, checked);
            
            arr.pop();
            checked[i] = false;
        }
    }

    return answer;
};

permute([1, 2, 3]);
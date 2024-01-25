// Solution 1: Brute Force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; nums.length > i; i++){
        for(let a = i+1; nums.length > a; a++){
            if((nums[i] + nums[a]) === target){
                return [i, a];
            }
        }
    }
    
};

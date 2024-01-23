// Solution 1: Best Solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let finalArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (finalArray.includes(nums[i])) {
            return true;
        }
        finalArray.push(nums[i]);
    }
    return false;
};

// Solution 2: Brute Force
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let a = i + 1; a < nums.length; a++){
            if(nums[i] == nums[a]){
                return true;
            }
        }
    }
    return false;
};
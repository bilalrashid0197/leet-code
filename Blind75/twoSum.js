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

// Solution 2: Dict with key as value and pair as index
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let diffAndIndexDict = {};
    for(let i = 0; nums.length > i; i++){
        let difference = target - nums[i];
        
        // See if the difference exists in the dict, if it doesn't add key(value)-value(index) pair
        if(!(difference in diffAndIndexDict)){
            diffAndIndexDict[nums[i]] = i;
            
        // If difference in the dict, then return the two indexes
        } else if (difference in diffAndIndexDict){
            return [diffAndIndexDict[difference], i];
        }
    }
};


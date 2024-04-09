// Solution 1:
    // Time: 
    // Space:

// Solution 2:
    // Time: 
    // Space:    


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let finalArray = [];
    nums.sort((a,b) => a-b)
    for(let i = 0; nums.length > i; i++){
        let a = i + 1;
        let endOfArray = nums.length - 1;
        while( a < endOfArray){
            if(nums[i] + nums[a] + nums[endOfArray] > 0){
                endOfArray -= 1;
            } else if (nums[i] + nums[a] + nums[endOfArray] < 0){
                a += 1;
            } else if(nums[i] + nums[a] + nums[endOfArray] == 0){
                finalArray.push([nums[i], nums[a], nums[endOfArray]])
            }
        }
    }
    return finalArray;
};

console.log(threeSum([-1,0,1,2,-1,4]))
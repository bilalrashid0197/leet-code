// Solution 1:
    // Time: O(n)
    // Space: O(n)
/**
 * @param {number[]} numd
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let setOfNumbers = new Set(nums);
    let longest = 0;
    for(let value of setOfNumbers){
        if(!(setOfNumbers.has(value - 1))){
            let lengthOfCurrentSequence = 0;
            while(setOfNumbers.has(value + lengthOfCurrentSequence)){
                lengthOfCurrentSequence += 1;
            };
            longest = Math.max(longest, lengthOfCurrentSequence);
        };
    };
    return longest;
};

// Solution 2:
    // Time: O(n log n)
    // Space: O(1)
/**
 * @param {number[]} numd
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    nums.sort((a,b) => a-b);
    let currentLength = 1;
    let longestLength = 1;
    for(let i = 1; nums.length > i; i++){
        if(nums[i] !== nums[i-1]){
            if(nums[i] === nums[i-1] + 1){
                currentLength += 1;
            } else {
                longestLength = Math.max(currentLength, longestLength);
                currentLength = 1;
            }
        }
    }
    return Math.max(longestLength, currentLength);
};
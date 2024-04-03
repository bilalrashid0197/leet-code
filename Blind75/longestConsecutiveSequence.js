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
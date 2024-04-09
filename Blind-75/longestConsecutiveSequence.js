// Solution 1:
    // Time: O(n)
    // Space: O(n)
/**
 * @param {number[]} numd
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Step 1: Create a set of all the unique numbers
    let setOfNumbers = new Set(nums);
    let longest = 0;
    // Step 2: Loop over each number in the set
    for(let value of setOfNumbers){
        // Step 3: If the currentValue - 1 is not present in the set we have a start of a new sequence
        if(!(setOfNumbers.has(value - 1))){
            let lengthOfCurrentSequence = 0; // Create a count for the current sequence
            // Step 4: While the currentValue + 1 exists in the set we have an ongoing sequence
            while(setOfNumbers.has(value + lengthOfCurrentSequence)){
                lengthOfCurrentSequence += 1;
            };
            // Step 5: once the sequence eventually runs out we assign "longest" the max value between the previous sequence and the length of the current sequence
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
    // Step 1: Return 0 if the length is zero
    if(nums.length === 0){
        return 0;
    }
    // Step 2: Sort the numbers in ascending order
    nums.sort((a,b) => a-b);
    let currentLength = 1;
    let longestLength = 1;
    // Step 3: Loop over the 2nd(1st) element in teh array
    for(let i = 1; nums.length > i; i++){
        if(nums[i] !== nums[i-1]){ // Step 4: Check if the previous element is equal to the current - still we have a sequence even if the value is there
            if(nums[i] === nums[i-1] + 1){ // Step 5: If a duplicate doesn't exists check if the current value is equal to the previous+1 - hence saying we have a sequence.
                currentLength += 1;
            } else {
                longestLength = Math.max(currentLength, longestLength); // Step 6: Once the current value is not equal to the previous value + 1 - we return the max value between current sequence length and longest sequence length;
                currentLength = 1;
            }
        }
    }
    return Math.max(longestLength, currentLength); // Step 7: Since some sequences can last to the end of the array - make sure to return the max value between lonest length and the current length
};
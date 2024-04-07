// Solution 1: Brute Force Approach
    // This approach checks each pair of numbers to find a pair that adds up to the target.
    // Time Complexity: O(n^2) - As there are two nested loops, each potentially iterating 'n' times for an array of 'n' elements.
    // Space Complexity: O(1) - No additional space is used that scales with the input size; only a constant number of variables are used.

/**
 * Finds two numbers such that they add up to a specific target number and returns their indices.
 * 
 * @param {number[]} numbers - A sorted array of integers (not necessarily sorted in this brute force approach).
 * @param {number} target - The target sum to find within the array.
 * @return {number[]} - Indices of the two numbers that add up to the target, incremented by 1 as per the problem statement.
 */
var twoSum = function(numbers, target) {
    // Step 1: Iterate over the array with the first pointer 'i'
    for(let i = 0; i < numbers.length; i++) {
        // Step 2: Iterate with the second pointer 'a', starting from the element after 'i'
        for(let a = i + 1; a < numbers.length; a++) {
            // Step 3: Check if the current pair of numbers adds up to the target
            if((numbers[i] + numbers[a] === target)) { // Use '===' for strict equality check
                // If they do add up, return the indices. According to the problem, indices are 1-based.
                return [i + 1, a + 1];
            }
        }
    }
    // If no pair adds up to the target, the function will implicitly return 'undefined'
};


// Solution 2: Two Pointer Approach
    // Time Complexity: O(n) - One pass through the array with two pointers moving towards each other.
    // Space Complexity: O(1) - Uses constant space for the two pointers, no additional storage is needed.

/**
 * Finds two numbers that add up to the target sum using a two-pointer approach.
 * Assumes the input array 'numbers' is sorted in ascending order.
 * 
 * @param {number[]} numbers - The array of sorted integers.
 * @param {number} target - The sum that the two numbers must add up to.
 * @return {number[]} - The one-based indices of the two numbers that add up to the target.
 */
var twoSum = function(numbers, target) {
    let leftPointer = 0; // Initialize the left pointer at the start of the array.
    let rightPointer = numbers.length - 1; // Initialize the right pointer at the end of the array.
    
    // Continue searching as long as the left pointer has not surpassed the right pointer.
    while(leftPointer < rightPointer) {
        let currentSum = numbers[leftPointer] + numbers[rightPointer]; // Sum of values at the two pointers.

        // If the current sum exceeds the target, decrement the right pointer to find a smaller pair sum.
        if(currentSum > target) {
            rightPointer -= 1;
        }
        // If the current sum is less than the target, increment the left pointer to find a larger pair sum.
        else if(currentSum < target) {
            leftPointer += 1;
        }
        // If the current sum is equal to the target, return the one-based indices of the two numbers.
        else {
            return [leftPointer + 1, rightPointer + 1]; // Indices are offset by 1 to convert from zero-based to one-based.
        }
    }
    // If no valid pair is found, the function will implicitly return 'undefined'.
};
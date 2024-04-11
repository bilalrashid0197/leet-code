/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @return {number} The length of the longest substring without repeat.
 */
var lengthOfLongestSubstring = function(s) {
    let currentSet = new Set(); // Initialize a set to track characters in the current window.
    let leftPointer = 0; // Initialize the left pointer of the window.
    let result = 0; // Variable to store the maximum length found.

    // Iterate over each character in the string using rightPointer as the index.
    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        // If the current character already exists in the set, we have a repeating character.
        while (currentSet.has(s[rightPointer])) {
            // Remove the character at the leftPointer position to try and remove the duplicate.
            currentSet.delete(s[leftPointer]);
            // Move the left pointer right to narrow the window.
            leftPointer += 1;
        }

        // Add the current character to the set.
        currentSet.add(s[rightPointer]);

        // Calculate the current window size and update result if it's the largest found.
        // rightPointer - leftPointer + 1 calculates the number of elements in the current window.
        result = Math.max(result, rightPointer - leftPointer + 1);
    }

    // Return the largest window size found, which is the length of the longest substring without repeats.
    return result;
};
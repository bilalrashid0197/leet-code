// Solution 1:
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Step 1: Define a object to store all the sorted words with the value being a key of all the anagrams
    let anagrams = {};
    for(let i = 0; strs.length> i; i++){ // Step 2: Loop over the array
        const currentStr = strs[i]; // Define the current value the program is looking at
        const sortedString = currentStr.split('').sort().join('') // Sort the current value
        if(!anagrams[sortedString]){ // if the value current sorted value isn't in the object make it a key and set the result to an array
            anagrams[sortedString] = []
        } 
        anagrams[sortedString].push(currentStr) // For each sorted string if it exists, add the current string as an anagram
    };
    return Object.values(anagrams); // Return the values from the dict
};

// Solution 1
    // Time: O(n log n)
    // Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1: Create an object to count the frequencies of each number
    let freqDict = {};
    for (let i = 0; nums.length > i; i++) {
        if (!(nums[i] in freqDict)) {
            freqDict[nums[i]] = 1;
        } else {
            freqDict[nums[i]] += 1;
        };
    };
    // Step 2: Convert the frequency object to an array of [number, frequency] pairs, and sort it by frequency in descending order
    let arrayToBeSorted = Object.entries(freqDict)
    arrayToBeSorted.sort(
        (firstElement, secondElement) => secondElement[1] - firstElement[1]
    );
    // Step 3: Extract the first 'k' keys from the sorted array of pairs and return them
    return arrayToBeSorted.splice(0, k).map((currentArray) => currentArray[0]);
};

// Solution 2:
    // Time: O(n)
    // Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let finalArray = [];
    // Step 1: Create an object to count the frequencies of each number
    let freqDict = {};
    for (let i = 0; nums.length > i; i++) {
        if (!(nums[i] in freqDict)) {
            freqDict[nums[i]] = 1;
        } else {
            freqDict[nums[i]] += 1;
        };
    };
    // Step 2: Create an array of length nums + 1 to store all the frequencie.Each index will represent the frequencie while the values will be stored in that frequencie
    let freqArray = [];
    for (let i = 0; nums.length >= i; i++) {
        freqArray.push([]);
    };
    // Step 3: Append the frequenices from the object based on each array. We will map each index to the amount of times that number apperaaed (appending the number)
    for (let [key, freqValue] of Object.entries(freqDict)) {
        freqArray[freqValue].push(key);
    };
    // Step 4: Loop over the array until k is zero and append the top k frequent elements
    for (let i = freqArray.length - 1; i >= 0; i--) {
        if (freqArray[i] !== null) {
            for (let a = 0; a < freqArray[i].length; a++) {
                finalArray.push(freqArray[i][a]);
                k--;
                if (k === 0) {
                    return finalArray;
                };
            };
        };
    };
    return finalArray;
}
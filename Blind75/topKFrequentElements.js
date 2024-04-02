// Solution 1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqDict = {};
    for(let i = 0; nums.length > i; i++){
        if(!(nums[i] in freqDict)){
            freqDict[nums[i]] = 1;
        } else {
            freqDict[nums[i]] += 1;
        };
    };
    let arrayToBeSorted = Object.entries(freqDict)
    arrayToBeSorted.sort(
        (firstElement, secondElement) => secondElement[1] - firstElement[1]
    );
    return arrayToBeSorted.splice(0,k).map((currentArray) => currentArray[0]);
};
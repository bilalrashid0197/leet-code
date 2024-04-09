// Solution 1: Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target){
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let middlePointer;
    while(rightPointer >= leftPointer){
        // Calculate the midpoint of the array
        middlePointer = Math.floor((leftPointer + rightPointer)/2); 
        
        // If the current target is greater than the midpoint then move the left pointer
        if(target > nums[middlePointer]){
            leftPointer = middlePointer + 1
        } else if(nums[middlePointer] > target){ // If the current midpoint is greater than the target, then move the right pointer
            rightPointer = middlePointer - 1;
        } else {
            return middlePointer
        }
    };
    // If the value doesn't exists then we can return -1
    return -1; 
};

// Solution 2: Not Binary Search (Brute Force)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target){
    
    // Use normal for loop
    for(let i = 0; nums.length > i; i++){
        if(nums[i] === target){ // every itteration check if the current itteration equals target
            return i;
        }
    }
    // Return -1 if no matches were found, meaning target doesn't exists in the array
    return -1;
};
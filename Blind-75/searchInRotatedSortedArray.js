/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while(leftPointer <= rightPointer){
        let middlePointer = Math.floor((leftPointer+rightPointer)/ 2);
        if(nums[middlePointer] == target){
            return middlePointer
        }else if(nums[middlePointer] >= nums[leftPointer]){
            if(target >= nums[leftPointer] && nums[middlePointer] >= target){
                rightPointer = middlePointer - 1;
            } else {
                leftPointer = middlePointer + 1;
            }
        } else{
            if(target >= nums[middlePointer] && nums[rightPointer] >= target){
                leftPointer = middlePointer + 1;
            } else{
                rightPointer = middlePointer - 1;
            }
        }
    }
    return - 1;
};
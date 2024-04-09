// Solution 1: Brute Force
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    for(let i = 0; nums.length > i; i++){
        let product = 1;
        for(let a = 0; nums.length > a; a++){
            if(a === i){
                continue
            } else{
                product = product * nums[a]
            }
        } 
        answer[i] = product;
    }
    return answer;
};

// Solution 2: Post Fix and Pre Fix in the answer list (BEST SOLUTION)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let preFix = 1; // Initialize the prefix product as 1
    let postFix = 1; // Initialize the postfix product as 1
    let answer = new Array(nums.length); // Create a new array to store the results
    // Calculate the prefix products
    for(let i = 0; i < nums.length; i++){
        answer[i] = preFix; // Store the prefix product of the previous elements
        preFix = preFix * nums[i]; // Update the prefix product by multiplying it with the current element
    }
    // Calculate the postfix products and multiply them with the prefix products
    for(let a = nums.length - 1; a >= 0; a--){
        answer[a] = answer[a] * postFix; // Multiply the prefix product with the postfix product
        postFix = postFix * nums[a]; // Update the postfix product by multiplying it with the current element
    }
    return answer; // Return the resulting array
};

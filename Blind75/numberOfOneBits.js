// Solution 1:
    // Time: O(b); We are checking every bit by dividing by two
    // Space: O(1);
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let weight = 0; // set the counter variable
    while(n != 0){ // we are going to have the while loop run until the quotient 
        let remainder = n % 2; // calculate the remainder
        if(remainder != 0){ // if the remainder isn't equal to zero we know that the bit is active 
            weight += 1; // hence we append to our count
        };
        n = Math.floor(n/2); // update n to equal the new quotient
    };
    return weight;
};
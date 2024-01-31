// Solution 1: Two Pointer
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let leftPointer = 0;
    let rightPointer = 1;
    let maxProfit = 0;

    while(prices.length > rightPointer){ // Make sure the rightPointer doesn't go out of bounds
      if(prices[leftPointer] > prices[rightPointer]){ // This means that our leftPointer is greater, hence we are losing money
          leftPointer = rightPointer; // Set the leftPointer to rightPoitner postions 
          rightPointer += 1; // Increment rightPointer to compare next value
      } else {
          maxProfit = Math.max(maxProfit, prices[rightPointer] - prices[leftPointer]) // compare the profit
          rightPointer++; // Increment rightPointer by 1
      }
    }
    return maxProfit;
};

// Solution 2: Sliding Window
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices){
 	let minPrice = Number.MAX_VALUE; // Set value to max value
  let maxProfit = 0;
  for(let price in prices){ // for each itteration
  	if(minPrice > price){ // if minPrice is greater than current itteration, set price as smallest price
    	minPrice = price
    } else {
    	maxProfit = Math.max(maxProfit, price - minPrice) // Calcualte the maxProfit value between maxProfit, and price - minPrice
    }
  }
  return maxProfit; // return maxProfit
 }
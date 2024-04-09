// CONTAINS DUPLICATE
	// Solution 1: Brute Force 
		// Time: O(n^2)
		// Space: O(1)
	/**
	 * @param {number[]} nums
	 * @return {boolean} [1,2,3]
	 */
	var containsDuplicate = function(nums) {
		for(let i = 0; nums.length > i; i++){
			for(let a = i + 1; nums.length > a; a++){
				if(nums[a] === nums[i]){
					return true;
				}
			}
		}
		return false;
	};

	// Solution 2: Array and check if it exists in array
		// Time: O(n)
		// Space: O(n)
	/**
	 * @param {number[]} nums
	 * @return {boolean}
	 */
	var containsDuplicate = function(nums) {
		let arrayToAppend = [];
		for(let i = 0; nums.length > i; i++){
			if(arrayToAppend.includes(nums[i])){
				return true;
			}
			arrayToAppend.push(nums[i]);
		}
		return false;
	};

	// Solution 3: Sort
		// Time: O(n)
		// Space: O(1)
	/**
	 * @param {number[]} nums
	 * @return {boolean}
	 */
	var containsDuplicate = function(nums) {
		nums.sort((a,b) => a-b);
		for(let i = 0; nums.length - 1 > i; i++){
			if(nums[i] == nums[i+1]){
				return true;
			}
		}
		return false;
	

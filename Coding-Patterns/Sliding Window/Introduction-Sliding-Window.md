# Introduction to Sliding Window
- The **sliding window** pattern is used to process sequential data, array, and string, for example, to solve subarray or substrings problems.
- This technique involves maintaining a dynamic windows that slides throught the array or string, while adjusting boundaries keeping track of relevant elements or characters.
- The windows is used to slide over the data in chunks, where these chunks can be given in the problem.
- This can also be viewed as a two pointer approach with the windows bounds be the pointers.
- Imagine you are in a long hallway lined with paintings, and you're looking at a portion that only reveals certain paintings. As you move certain paintings leave your current view while others enter. This is how the sliding window technique operates over data.
- Why is this method more efficient? Consider we need to find *k* consecutive integers with the largest sum in an array. The time complexity of the naive solution to this problem would be O(kn), becasue we need to computer sums of all subarrays of size k. 
- On the other hand, if we employ the sliding window pattern, instead of computing the sum of all elements in the window we can just subtract the element existing the window, add the element entering the sliding window, and update the max sum, yielding an overall time complexity of O(n). 

    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%203.47.56 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%203.50.40 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%203.51.15 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%203.51.38 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%203.51.59 PM.png)

### Examples
- The following examples illustrate some problems that can be solved with this approach:
1. **Maximum sum subarray of size K:** Given an array of integers and a postive integer k, find the maximum sum of any contiguous subarray of size k. 
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%204.47.07 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%204.47.30 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%204.47.57 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%204.48.21 PM.png)
    ![](/Coding-Patterns/Sliding%20Window/Screenshot%202024-04-09%20at%204.49.05 PM.png)
2. **Longest substring without repeating characters:** Given a string, find the length of the longest substring without repeting characters. Here is our array for example: [a, b, c, d, b, e, a]
- Start with both pointers at the beginning of the array. The window is initially empty.
- Expand the window by moving the end pointer to the right, adding characters to the current substring until you encounter a repeating character. In the array, we can add 'a', 'b', 'c', and 'd' without any repetition. The substring ['a', 'b', 'c', 'd'] has a length of 4.
- When we encounter the first repeating character, which is 'b', we have to move the start pointer to the right to exclude the previous occurrence of 'b' from our window.
- Now the window starts after the first 'b', and the end pointer continues to move right. Our new window is ['c', 'd', 'b', 'e'], which is again of length 4.
- We then add 'a' to the window since 'a' does not repeat within the current window. Now the window becomes ['c', 'd', 'b', 'e', 'a'], which has a length of 5.
### Does your problem match this pattern?
Yes if all these conditions are fullfilled:
- **Contiguous data:** The input data is stored in a contiguous manner, such as an array or string
- **Processing subsets of elements:** The problem requires computations on a contiguous subset of data elements (a subarray or a substring), such that the window moves across the input array from one end to the other. 
- **Efficient computation time complexity:** The computations performed every time the window moves takes constant or very small time.
// Solution 1: Recursion
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null){ // If the root is null return the original list
        return root;
    } 
    // Since we are going to be swapping values we need a temporary value holder
    leftNodeTempValue = root.left; // Hold the left sides node value as a temporary value
    root.left = root.right; // Set the value off the left node to the right node values
    root.right = leftNodeTempValue; // Set the right nodes value to the temporary value.
    invertTree(root.left); // Use recursion to invert each sub tree
    invertTree(root.right);  // Use recursion to invert each sub tree
    return root; // return the tree
};

// Solution 1:
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    // If both trees are empty, they are the same return true then
    if(p === null && q === null){
        return true;
    }

    // If one of the trees is empty and the other is not, they are not the same
    if(p === null || q === null){
        return false;
    }

    // Compare the value of the current node. If they are not equal return false
    if(p.val !== q.val){
        return false;
    }

    // Recursively check the left and right subtrees.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

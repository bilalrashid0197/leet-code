// Solution 1
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = (mainTreeRoot, subTreeRoot) => {
  // Helper function to check if two trees are identical
  const areTreesIdentical = (node1, node2) => {
    const queue = [[node1, node2]];
    // Process all pairs of nodes
    while (queue.length) {
      const [currentMainNode, currentSubNode] = queue.pop();
      // If both nodes are null, continue to the next pair
      if (!currentMainNode && !currentSubNode) continue;
      // If one is null or values are different, trees aren't identical
      if (!currentMainNode || !currentSubNode || currentMainNode.val !== currentSubNode.val) return false;
      // Add child nodes of both trees to the queue
      queue.push([currentMainNode.right, currentSubNode.right], [currentMainNode.left, currentSubNode.left]);
    }
    // All nodes matched, trees are identical
    return true;
  }
  // Initialize the queue with the root of the main tree
  const mainTreeNodes = [mainTreeRoot];
  // Traverse the main tree
  while (mainTreeNodes.length) {
    const currentNode = mainTreeNodes.pop();    
    // Skip if null
    if (!currentNode) continue; 
    // If the current node matches the root of the subtree, check for identity
    if (areTreesIdentical(currentNode, subTreeRoot)) return true;
    // Add child nodes to the queue
    mainTreeNodes.push(currentNode.right, currentNode.left);
  }
  // Subtree was not found in the main tree
  return false;
};

//Solution 1: Hashmap
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let currentNode = head; // Define the head of the linkedlist
    let hashMap = new Map(); // Define a new map
    while(currentNode){ // If a currentNode exists
        if(!hashMap.has(currentNode)){ // If the hashMap doesn't have the currentNode
            hashMap.set(currentNode, true) // Add it as a key-value pair
            currentNode = currentNode.next // Move to the next node
        } else { // If the hashmap does have the value then 
            return true; // return true - cycle detected
        }
    }
    return false;  // If the hashmap is fully unique return false since a cycle doesn't exists.
};
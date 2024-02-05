// Solution 1: Two Pointer
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let previousPointer = null; // Set previousPoitner too null as this will be allow be the new Head and Tail at the beginning
	let currentPointer = head; // This returns the current value we have
	while(currentPointer != null){ 
		let nextPointer = currentPointer.next; // The next listNode that the currentPoitner links too
		
    // Change the node memory address to the previousPointer.
    currentPointer.next = previousPointer // In this first case it would be null then after it would point too the different node reversed.
		previousPointer = currentPointer // Update previousPointer too be set to currentPointer
		currentPointer = nextPointer // Set currentPointer too be nextPointer
	}
	return previousPointer // Return the head of the linked-list.
};
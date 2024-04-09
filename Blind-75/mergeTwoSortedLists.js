// Solution 1: Two Pointers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(-1); // Create a dummy node
    let current = dummyHead;

    while(list1 !== null && list2 !== null){ // Execute until one of the node doesn't exists
        if(list2.val > list1.val){ // If list2 values is bigger than
            current.next = list1; // the next value in the dummy LinkedList should be list1
            list1 = list1.next; // moving to the next value in list1
        } else { // If list1 value is bigger or equal
            current.next = list2; // the next value in the dummy LinkedList should be list2
            list2 = list2.next; // moving to the next value in list2
        }
        current = current.next; // move on to the next current node
    }
    current.next = list1 === null ? list2 : list1; // If list1 is null append the other list2, otherwise append list1 if it isn't null (this would ensure that one of this lists is null since we break out the while loop)
    return dummyHead.next; // return the next value
};
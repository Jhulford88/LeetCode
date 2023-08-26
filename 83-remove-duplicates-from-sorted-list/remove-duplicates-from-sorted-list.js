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

 concept: next to move the pointer to the next node if vals match

 1. save curr node in var
 2. check the value of the next node
 3. if vals match, assign next to next.next
 */
var deleteDuplicates = function(head) {
    let temp = head;

    while(temp !== null) {
        if (temp.next !== null && temp.val === temp.next.val) {
            let next_next = temp.next.next;
            let nodeToDelete = temp.next;
            temp.next = next_next;
            delete(nodeToDelete);
        } else {
            temp = temp.next
        }
    }
    return head;
};
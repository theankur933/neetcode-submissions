/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            let next = current.next; // Save the next node
            current.next = prev;     // Reverse the link
            prev = current;          // Move prev forward
            current = next;          // Move current forward
        }

        return prev;
    }
}
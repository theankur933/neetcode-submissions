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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. Find the middle of the list
        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse the second half
        let second = slow.next;
        slow.next = null;

        let prev = null;

        while (second) {
            let nextNode = second.next;
            second.next = prev;
            prev = second;
            second = nextNode;
        }

        // 3. Merge both halves alternately
        let first = head;
        second = prev;

        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
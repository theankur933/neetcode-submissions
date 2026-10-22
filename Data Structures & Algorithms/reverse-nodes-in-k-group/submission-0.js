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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = { val: 0, next: head };
        let groupPrev = dummy;

        while (true) {
            // Find the k-th node of this group
            let kth = groupPrev;
            for (let i = 0; i < k && kth !== null; i++) {
                kth = kth.next;
            }
            if (kth === null) break; // fewer than k nodes remain

            const groupNext = kth.next;

            // Reverse the group; the first node will end up pointing to groupNext
            let prev = groupNext;
            let curr = groupPrev.next;
            while (curr !== groupNext) {
                const nxt = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nxt;
            }

            // Reconnect: groupPrev -> new group head (kth); old head is the new tail
            const oldHead = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = oldHead;
        }

        return dummy.next;
    }
}
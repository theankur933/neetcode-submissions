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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;

        let step = 1;
        const n = lists.length;

        // Merge neighbors at increasing distances: (0,1), (2,3), ... then (0,2), (4,6), ...
        while (step < n) {
            for (let i = 0; i + step < n; i += step * 2) {
                lists[i] = this.mergeTwo(lists[i], lists[i + step]);
            }
            step *= 2;
        }

        return lists[0];
    }

    mergeTwo(a, b) {
        const dummy = { val: 0, next: null };
        let tail = dummy;

        while (a !== null && b !== null) {
            if (a.val <= b.val) {
                tail.next = a;
                a = a.next;
            } else {
                tail.next = b;
                b = b.next;
            }
            tail = tail.next;
        }

        tail.next = a !== null ? a : b;
        return dummy.next;
    }
}
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */


class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Both nodes are null
        if (p === null && q === null) {
            return true;
        }

        // One node is null, but the other is not
        if (p === null || q === null) {
            return false;
        }

        // Node values are different
        if (p.val !== q.val) {
            return false;
        }

        // Compare left and right subtrees
        return this.isSameTree(p.left, q.left) &&
               this.isSameTree(p.right, q.right);
    }
}

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
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let best = 0;

        const height = (node) => {
            if (node === null) return 0;

            const left = height(node.left);
            const right = height(node.right);

            best = Math.max(best, left + right);

            return 1 + Math.max(left, right);
        };

        height(root);
        return best;
    }
}
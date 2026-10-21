class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        // Phase 1: Find the intersection point
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        // Phase 2: Find the entrance to the cycle
        slow = nums[0];

        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}
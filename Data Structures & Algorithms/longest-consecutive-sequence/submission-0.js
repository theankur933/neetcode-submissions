class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            // Start only at the beginning of a sequence
            if (!numSet.has(num - 1)) {
                let current = num;
                let length = 1;

                // Count consecutive numbers
                while (numSet.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
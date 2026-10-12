class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();

        // Count the frequency of each number
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Sort numbers by frequency, highest first
        const sorted = Array.from(count.keys()).sort(
            (a, b) => count.get(b) - count.get(a)
        );

        // Return the k most frequent numbers
        return sorted.slice(0, k);
    }
}
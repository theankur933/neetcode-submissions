class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const n = nums.length;

        for (let i = 0; i < n - 2; i++) {
            // Smallest number is positive, so no triplet can sum to 0
            if (nums[i] > 0) break;

            // Skip duplicate first elements
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = n - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    // Skip duplicate second elements
                    while (l < r && nums[l] === nums[l - 1]) l++;
                }
            }
        }

        return res;
    }
}
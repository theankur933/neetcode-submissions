class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];
        const result = [];
        let head = 0;

        for (let right = 0; right < nums.length; right++) {
            // Remove indices outside the current window
            if (head < deque.length && deque[head] <= right - k) {
                head++;
            }

            // Remove smaller elements from the back
            while (
                deque.length > head &&
                nums[deque[deque.length - 1]] <= nums[right]
            ) {
                deque.pop();
            }

            deque.push(right);

            // Record the maximum once the window reaches size k
            if (right >= k - 1) {
                result.push(nums[deque[head]]);
            }
        }

        return result;
    }
}
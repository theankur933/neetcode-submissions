class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        const chars = new Set();

        for (let right = 0; right < s.length; right++) {
            while (chars.has(s[right])) {
                chars.delete(s[left]);
                left++;
            }

            chars.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
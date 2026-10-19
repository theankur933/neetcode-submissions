class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const need = new Map();
        const window = new Map();

        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let left = 0;
        let have = 0;
        const required = need.size;

        let minLength = Infinity;
        let start = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            window.set(char, (window.get(char) || 0) + 1);

            if (need.has(char) && window.get(char) === need.get(char)) {
                have++;
            }

            while (have === required) {
                const length = right - left + 1;

                if (length < minLength) {
                    minLength = length;
                    start = left;
                }

                const leftChar = s[left];
                window.set(leftChar, window.get(leftChar) - 1);

                if (
                    need.has(leftChar) &&
                    window.get(leftChar) < need.get(leftChar)
                ) {
                    have--;
                }

                left++;
            }
        }

        return minLength === Infinity
            ? ""
            : s.substring(start, start + minLength);
    }
}
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (let s of strs) {
            encoded += s.length + "#" + s;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // Find the delimiter
            while (str[j] !== "#") {
                j++;
            }

            // Get the length of the original string
            let len = Number(str.substring(i, j));

            // Extract the original string
            let word = str.substring(j + 1, j + 1 + len);
            result.push(word);

            // Move to the next encoded string
            i = j + 1 + len;
        }

        return result;
    }
}
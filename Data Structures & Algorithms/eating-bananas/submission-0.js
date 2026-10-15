class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            let hours = 0;

            for (const pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                // This speed works; try a slower speed
                right = mid - 1;
            } else {
                // Too slow; increase the speed
                left = mid + 1;
            }
        }

        return left;
    }
}
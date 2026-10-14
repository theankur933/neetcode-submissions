class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        // Sort cars by position, closest to target first
        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];

        for (const [pos, spd] of cars) {
            const time = (target - pos) / spd;

            // A slower fleet ahead prevents this car from forming a new fleet
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
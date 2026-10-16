class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }

        this.store.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.store.get(key);

        if (!values) {
            return "";
        }

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const [time, value] = values[mid];

            if (time <= timestamp) {
                result = value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
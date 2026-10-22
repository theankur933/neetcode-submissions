class Node {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(); // sentinel: most recent side
        this.tail = new Node(); // sentinel: least recent side
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.map.get(key);
        if (node === undefined) return -1;
        this._remove(node);
        this._addToFront(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const existing = this.map.get(key);
        if (existing !== undefined) {
            existing.value = value;
            this._remove(existing);
            this._addToFront(existing);
            return;
        }

        const node = new Node(key, value);
        this.map.set(key, node);
        this._addToFront(node);

        if (this.map.size > this.capacity) {
            const lru = this.tail.prev;
            this._remove(lru);
            this.map.delete(lru.key);
        }
    }
}
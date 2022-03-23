module.exports = class CircularQueue {
    constructor(size) {
        /**
         * 
         * Circular Queue is a kind of queue with fixed size. 
         * Last and first element are connected
         * there will be first and back index too which will be used to know if the queue is full or empty
         * also where will the element enter and from where the element will exit.
        */
        this.circualrQueue = new Array(size)
        this.front = -1;
        this.back = -1;
        this.size = size;
    }

    /**
    * @return {boolean}
    */
    isEmpty() {
        return this.front === -1;
    }

    /**
    * @return {boolean}
    */
    isFull() {
        if (this.front == 0 && this.back == this.size - 1) {
            return true;
        }
        if (this.front == this.back + 1) {
            return true;
        }
        return false;
    }

     /**
     * @return {*}
     */
    enqueue(element) {
        if (this.isFull())
            return "Queue is full.";
        if (this.front == -1)
            this.front = 0;

        this.back = (this.back + 1) % this.size;
        this.circualrQueue[this.back] = element;
    }

     /**
     * @return {element}
     */
    dequeue() {
        if (this.isEmpty()) return "No element in the queue";

        const value = this.getFront();

        this.circualrQueue[this.front % this.size] = null;
        if (this.front == this.back) {
            this.front = -1;
            this.back = -1;
        } else {
            this.front++;
        }
        return value;
    }

     /**
     * @return {element}
     */
    getFront() {
        if (this.isEmpty()) return "No element in the queue";
        return this.circualrQueue[this.front % this.size]
    }

     /**
     * @return {*}
     */
    clear() {
        this.circualrQueue = new Array(this.size);
        this.back = -1;
        this.front = -1;
    }

     /**
     * @return {*}
     */
    print() {
        console.log(this.circualrQueue, 'front', this.front, 'back', this.back);
    }
}
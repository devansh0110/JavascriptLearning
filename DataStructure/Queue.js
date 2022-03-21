module.exports = class Queue {
    constructor() {
    /**
     * Application of Queue
     
     *  CPU scheduling, Disk Scheduling

     *  When data is transferred asynchronously between two processes.
        The queue is used for synchronization. For example: IO Buffers, pipes, file IO, etc

     *  Handling of interrupts in real-time systems.

     *  Call Center phone systems use Queues to hold people calling them in order.
     */
        this.queue = new Array();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.queue.length === 0;
    }

    /**
     * Read the element at the front of the queue without removing it.
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue[0];
    }

    /**
     * Add a new element to the end of the queue (the tail of the array).
     * This element will be processed after all elements ahead of it.
     * @param {*} value
     */
    enqueue(value) {
        this.queue.push(value);
    }

    /**
     * Remove the element at the front of the queue (the head of the array).
     * If the queue is empty, return null.
     * @return {*}
     */
    dequeue() {
        if (this.isEmpty())
            return null;
        return this.queue.shift(); // Shift remove first element from array
    }

    /**
     * @param [callback]
     * @return {string}
     */
    toString() {
        // Return string representation of the queue's array.
        var str = "";
        for (var i = 0; i < this.queue.length; i++) {
            if (i == this.queue.length - 1)
                str += this.queue[i];
            else
                str += this.queue[i] + ",";
        }

        return str;
    }
}
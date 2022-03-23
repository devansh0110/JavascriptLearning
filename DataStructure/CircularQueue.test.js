let Queue = require('../DataStructure/CircularQueue.js');


describe('Queue', () => {
    it('should create empty queue', () => {
        const queue = new Queue(10);
        expect(queue).not.toBeNull();
    });

    it('should enqueue and dequeue data to/from queue', () => {
        const queue = new Queue(5);
        expect(queue.isEmpty()).toBe(true);
        queue.print();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
        queue.print();
        queue.enqueue(2);
        queue.print();
        queue.enqueue(3);
        queue.print();
        queue.enqueue(4);
        queue.print();
        queue.enqueue(5);
        queue.print();
        expect(queue.isFull()).toBe(true);
        expect(queue.enqueue(6)).toBe("Queue is full.");
        queue.print();
        queue.dequeue();
        queue.print();
        queue.dequeue();
        queue.print();
        queue.dequeue();
        queue.print();
        queue.dequeue();
        queue.print();
        queue.dequeue();
        queue.print();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.dequeue()).toBe("No element in the queue");
        expect(queue.isEmpty()).toBe(true);
        queue.print();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
        queue.print();
    });
});



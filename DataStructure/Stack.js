module.exports = class Stack {
    constructor() {
        /**
         *  Last In First Out (LIFO)
         * Applications of Stack Data Structure

            To reverse a word - Put all the letters in a stack and pop them out. Because of the LIFO order of stack, you will get the 
                                letters in reverse order.
            In compilers - Compilers use the stack to calculate the value of expressions like 2 + 4 / 5 * (7 - 9) 
                            by converting the expression to prefix or postfix form.
            In browsers - The back button in a browser saves all the URLs you have visited previously in a stack. 
                            Each time you visit a new page, it is added on top of the stack. When you press the back button, the current URL is removed from the stack, and the previous URL is accessed.
         * 
         */
        this.stack = new Array();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        // The stack is empty if its array doesn't have a head.
        return this.stack.length === 0;
    }

    /**
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            // If the array is empty then there is nothing to peek from.
            return null;
        }

        // Just read the value from the start of array without deleting it.
        return this.stack[this.stack.length - 1];
    }

    /**
     * @param {*} value
     */
    push(value) {
        // Pushing means to lay the value on top of the stack. Therefore let's just add
        // the new value at the start of the array.
        this.stack.push(value);
    }

    /**
     * @return {*}
     */
    pop() {
        // Let's try to delete the first node (the head) from the array.
        // If there is no head (the array is empty) just return null.
        let ele = this.stack.pop();
        return ele === undefined ? null : ele;
    }

    /**
     * @return {*[]}
     */
    toArray() {
        return this.stack.reverse();
    }

    /**
     * @param {function} [callback]
     * @return {string}
     */
    toString(callback) {
        return this.stack.reverse().toString(callback);
    }
}


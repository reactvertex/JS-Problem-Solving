class Stack {
    constructor(arr = []) {
        // Initialize your stack
        this.arr = arr
    }
    
    push(element) {
        // Add element to the top
        this.arr.push(element)
        return this.arr.length
    }
    
    pop() {
        // Remove and return top element
        return this.arr.pop()
    }
    
    peek() {
        // Return top element without removing
        return this.arr[this.arr.length - 1]
    }
    
    isEmpty() {
        // Check if stack is empty
        return this.arr.length ? false : true
    }
    
    size() {
        // Return number of elements
        return this.arr.length
    }
    
    clear() {
        // Remove all elements
        return this.arr = []
    }
}


module.exports = Stack;

const stack = new Stack();
stack.isEmpty(); //true
stack.push(10); // 1
stack.push(20); //2
stack.push(30); //3
stack.size(); //3
stack.peek(); //30
stack.pop();  //30
stack.peek(); //20
stack.clear(); 
stack.isEmpty(); //true
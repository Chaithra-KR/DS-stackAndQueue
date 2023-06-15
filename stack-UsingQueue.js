class Queue{
    constructor(){
        this.elements = []
    }

    size(){
        return this.elements.length
    }

    enqueue(element){
        this.elements.push(element)
    }

    dequeue(){
        return this.elements.shift()
    }
    
    isEmpty(){
        return this.elements.length === 0
    }
}

class Stack{
    constructor(){
        this.queue = new Queue()
    }

    size(){
        return this.queue.size()
    }

    push(element){
        this.queue.enqueue(element)
        // Reorder the queue by dequeuing and enqueueing elements
        const size = this.size()
        for (let i = 0; i < size; i++) {
            this.queue.enqueue(this.queue.dequeue())
        }
    }

    isEmpty(){
        return this.queue.isEmpty()
    }

    pop(){
        if (this.isEmpty()) {
            console.log("stack is empty");
        }
        return this.queue.dequeue()
    }
}
const stack = new Stack()
stack.push(10)
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack);
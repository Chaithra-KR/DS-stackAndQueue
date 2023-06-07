class Queue{
    constructor(){
        this.elements =[]
    }

    isEmpty(){
        return this.elements.length == 0
    }

    size(){
        return this.elements.length
    }

    enqueue(element){
        this.elements.push(element)
    }

    print(){
        console.log(this.elements.toString());
    }

    dequeue(){
        return this.elements.shift()
    }

    peek(){
        if (!this.isEmpty()) {
            return this.elements[0]
        }
        return null
    }
}
const queue = new Queue
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek());

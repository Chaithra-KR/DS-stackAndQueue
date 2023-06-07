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

    getMiddle(){
        const queueSize = this.size()
        const midIndex = Math.floor(queueSize/2)
        return this.elements[midIndex]

    }

    removeMid(){
        const queueSize = this.size()
        const midIndex = Math.floor(queueSize/2)
        let tempQueue = []
        for (let i = 0; i < midIndex; i++) {
            tempQueue.push(this.elements.pop())  
        }
        this.elements.pop()
        while (tempQueue>0) {
            this.elements.push(tempQueue.pop())
        }
        return this.elements

    }

    removeMid(){
        const queueSize = this.size()
        const midIndex = Math.floor(queueSize/2)
        this.elements.splice(midIndex,1)
        return this.elements
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
console.log("mid",queue.getMiddle());
console.log(queue.removeMid());
queue.print()

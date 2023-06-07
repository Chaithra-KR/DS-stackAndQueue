class Stack{
    constructor(){
        this.elements = []
    }

    size(){
        return this.elements.length
    }

    push(element){
        this.elements.push(element)
    }

    getMiddle(){
        const stackSize = this.size()
        if (stackSize == 0) {
            console.log("stack is empty");
        }
        const middleIndex = Math.floor(stackSize/2)
        return this.elements[middleIndex]
    }
    print(){
        console.log(this.elements.toString());
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack);
console.log("mid",stack.getMiddle());
stack.print()
console.log(stack.size());
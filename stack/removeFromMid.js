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

    removeMId(){
        const stackSize = this.size()
        if (stackSize == 0) {
            console.log("stack is empty");
        }
        const middleIndex = Math.floor(stackSize/2)
        let tempStack = []
        for (let i = 0; i < middleIndex; i++) {
            tempStack.push(this.elements.pop())
        }
        this.elements.pop()
        while(tempStack.length>0){
            this.elements.push(tempStack.pop())
        }
        return this.elements
    }

    //OR

    removeMId(){
        const stackSize = this.size()
        if (stackSize == 0) {
            console.log("stack is empty");
        }
        const middleIndex = Math.floor(stackSize/2)
        return this.elements.splice(middleIndex,1)
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
console.log("current stack elements",stack.removeMId());
stack.print()
console.log(stack.size());
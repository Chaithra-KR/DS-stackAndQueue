class Stack {

    constructor(){
        this.elements = []
    }

    //to check stack is empty or not
    isEmpty(){
        return this.elements.length === 0
    }
    
    //to push elements to the stack
    push(element){
        this.elements.push(element)
    }
    // push(element){
    //     this.elements[this.elements.length]=element
    // }

    //to display the size of stack
    size(){
        return this.elements.length
    }

    //to display the top element
    peek(){
        return this.elements[this.elements.length-1]
    }

    //to delete the elements from the stack
    pop(){
        return this.elements.pop()
    }

    //to display the stack elements
    print(){
        console.log(this.elements);
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.pop()
console.log(stack.peek());
console.log(stack)
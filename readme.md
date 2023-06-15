# Stack and Queue #
<br>
<hr>

## Stack ##

![stack visualization](https://media.geeksforgeeks.org/wp-content/uploads/20230116192305/stack-768.png) <br>
Image credit : [Geeksforgeeks](https://www.geeksforgeeks.org/)
<br>
* Stack is an abstract data type that follows the Last-In-First-Out (LIFO) principle.It is a sequential collection collection of
  elements.
* LIFO means the last element that inserted into the stack is first element to be removed from the stack.
* A stack is considered as abstract data type(ADT) because it defines a set of operations and properties without specifying the
  underlying implementation details. The term "abstract" refers to the fact that iss focuses on the specific way it is implemented.

<hr>

### A stack typically has two main operations: ###
<br>
Push: This operation adds an element to the top of the stack.
 <br>
Pop: This operation removes the top element from the stack.

<hr>

### addition to these basic operations, stacks usually include other auxiliary operations such as: ###
<br>
Peek or Top: Returns the top element of the stack without removing it.
Size: Returns the number of elements currently in the stack.
IsEmpty: Checks if the stack is empty or not.

<hr>

### Stack applications ###
<br>

* Browsing history tracking

* Undo operation when typing 

* Stacks are useful in evaluating arithmetic expressions, including infix, postfix, and prefix notations. They can be used to convert expressions from one notation to another, or to evaluate the expressions directly. 

* call stack in js runtime

* Stacks are used to manage function calls in programming languages.

* Backtracking algorithms, used in problem-solving and constraint satisfaction, often utilize stacks. The stack stores the current state of the search, allowing for backtracking and exploration of alternative paths when encountering dead ends. 

<br>
<hr>

## Queue ##

![queue visualization](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png) <br>
Image credit : [Geeksforgeeks](https://www.geeksforgeeks.org/)
<br>

> ### **What is queue ? **
> A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order. Queue follows FIFO principle , that means the first element that inserted into the queue is first element to be removed from the queue.

<br>
<hr>

### Features or Terminologies in queue ###

* Enqueue: It refers to the operation of adding an element to the back or end of the queue. The newly added element becomes the last element in the queue.

* Dequeue: It refers to the operation of removing the element from the front or head of the queue. The element that is dequeued is the one that has been in the queue for the longest time.

* Front: It refers to the element at the front or head of the queue, which is the next element to be dequeued.

* Rear: It refers to the element at the back or end of the queue, which is the last element that was enqueued.

* Size: It represents the number of elements currently present in the queue.

* IsEmpty: It is a condition that indicates whether the queue is empty or not. If the queue has no elements, it is considered empty.

* IsFull: It is a condition that indicates whether the queue is full or not. In some cases, queues have a maximum capacity, and when the number of elements in the queue reaches that capacity, it is considered full.

<br>
<hr>

### Queue applications ###
<br>
* Process Scheduling: Operating systems often use queues to manage processes in a scheduling algorithm. The processes are placed in a queue, and the operating system determines the order in which they should be executed.

* Print Spooling: When multiple print jobs are sent to a printer, they are typically placed in a queue. The printer processes each job in the order they were added to the queue, ensuring a fair and organized printing sequence.

* Task or Job Queue: Queues are used to manage a list of tasks or jobs in various applications. For example, in task scheduling systems or job management systems, tasks or jobs are added to a queue and processed based on their priority or arrival time.

* Message Queues: In messaging systems, queues are used to store and manage messages between different components or systems. Messages are enqueued in the sender's queue and dequeued from the receiver's queue, ensuring reliable message delivery.

* Call Center Systems: Call centers often use queues to manage incoming calls.

* CPU Task Scheduling
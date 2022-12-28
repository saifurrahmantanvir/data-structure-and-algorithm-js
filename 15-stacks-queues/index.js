/* Stacks - Linked list implementation */
/* class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }

   push(value) {
      const node = new Node(value);

      if (!this.first) {
         this.first = node;
         this.last = node;
      }
      else {
         node.next = this.first;
         this.first = node;

         /* const temp = this.first;
         this.first = node;
         this.first.next = temp; *//*
}

return ++this.size;
}

pop() {
if (!this.first) return null;

let old = this.first;
this.first = old.next;

if (this.size === 1) {
this.last = null;
}

this.size--;

return old.value;
}
}

const stack = new Stack()

console.log(stack.push(10))
console.log(stack.push(11))

console.log(stack.pop())

console.log(stack) */


/* Queue - Linked list implementation */
class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }

   enqueue(value) {
      const node = new Node(value);

      if (!this.first) {
         this.first = node;
         this.last = node;
      }
      else {
         this.last.next = node;
         this.last = node;
      }

      return ++this.size;
   }

   dequeue() {
      if (!this.first) return null;

      let old = this.first;
      this.first = old.next;

      if (this.size === 1) {
         this.last = null;
      }

      this.size--;

      return old.value;
   }
}

const queue = new Queue()

console.log(queue.enqueue(10))
console.log(queue.enqueue(20))

console.log(queue.dequeue())

console.log(queue)
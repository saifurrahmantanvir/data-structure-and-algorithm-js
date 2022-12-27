/* Singly Linked List */
class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(val) {
      const node = new Node(val)

      if (!this.head) {
         this.head = node;
         this.tail = this.head;
      }
      else {
         this.tail.next = node;
         this.tail = node;
      }
      this.length++;

      return this;
   }

   pop() {
      if (!this.head) return undefined;

      let current = this.head;
      let newTail = current;

      while (current.next) {
         newTail = current;
         current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }

      return current;
   }

   shift() {
      if (!this.head) return undefined;

      let old = this.head;
      this.head = old.next;
      this.length--;

      if (this.length === 0) {
         this.tail = null;
      }

      return old;
   }

   unshift(val) {
      const node = new Node(val)

      if (!this.head) {
         this.head = node;
         this.tail = this.head;
      }
      else {
         node.next = this.head;
         this.head = node;
      }
      this.length++;

      return this;
   }

   get(index) {
      if (index < 0 || index >= this.length) {
         return null
      }

      let counter = 0, current = this.head;

      while (counter !== index) {
         current = current.next;
         counter++;
      }

      return current;
   }

   set(index, val) {
      const node = this.get(index)
      if (!node) return false;

      node.val = val;

      return true;
   }

   insert(index, val) {
      if (index < 0 || index > this.length) {
         return false
      }
      else if (index === this.length) {
         this.push(val);
      }
      else if (index === 0) {
         this.unshift(val);
      }
      else {
         const node = new Node(val)
         const prev = this.get(index - 1)

         node.next = prev.next;
         prev.next = node;
         this.length++;

         /* const temp = prev.next;
         prev.next = node;
         node.next = temp;
         this.length++; */
      }

      return true;
   }

   remove(index) {
      if (index < 0 || index >= this.length) {
         return undefined;
      }
      else if (index === this.length - 1) {
         return this.pop()
      }
      else if (index === 0) {
         return this.shift()
      }
      else {
         const prev = this.get(index - 1)
         const removed = prev.next;

         prev.next = removed.next;
         this.length--;

         return removed;
      }
   }

   print() {
      let arr = [], current = this.head;

      while (current) {
         arr.push(current.val)
         current = current.next;

      }

      console.log(arr)
   }

   reverse() {
      let prev = null, next, node = this.head;
      this.head = this.tail;
      this.tail = node;

      for (let i = 0; i < this.length; i++) {
         next = node.next;

         node.next = prev;

         prev = node;
         node = next;
      }

      return this;
   }
}

const list = new SinglyLinkedList()

list.push(11)
list.push(12)
list.push(13)
list.push(14)
list.push(15)
list.print()
list.reverse()
list.print()
/* console.log(list)

list.pop()
console.log(list)

list.unshift(13)
console.log(list)
list.shift() */

/* console.log(list.get(1))
console.log(list.set(1, 24))

console.log(list.insert(3, 14))
console.log(list.remove(1)) */

console.log(list)
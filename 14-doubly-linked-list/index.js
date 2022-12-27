/* Doubly Linked List */
class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
   }
}

class DoublyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(val) {
      const node = new Node(val)

      if (!this.head) {
         this.head = node;
         this.tail = node;
      }
      else {
         this.tail.next = node;
         node.prev = this.tail;
         this.tail = node;
      }
      this.length++;

      return this;
   }

   pop() {
      if (!this.head) return undefined;

      const popped = this.tail;

      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      }
      else {
         this.tail = popped.prev;
         this.tail.next = null;
         popped.prev = null;
      }

      this.length--;

      return popped;
   }

   shift() {
      if (!this.head) return undefined;

      let old = this.head;

      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      }
      else {
         this.head = old.next;
         this.head.prev = null;
         old.next = null;
      }

      this.length--;

      return old;
   }

   unshift(val) {
      const node = new Node(val)

      if (!this.head) {
         this.head = node;
         this.tail = node;
      }
      else {
         this.head.prev = node;
         node.next = this.head;
         this.head = node;
      }

      this.length++;

      return this;
   }

   get(index) {
      if (index < 0 || index >= this.length) {
         return null;
      }

      if (index <= this.length / 2) {
         let current = this.head;

         for (let i = 0; i !== index; i++) {
            current = current.next;
         }

         return current
      }
      else {
         let current = this.tail;

         for (let i = this.length - 1; i !== index; i--) {
            current = current.prev;
         }

         return current
      }
   }

   set(index, val) {
      const node = this.get(index)
      if (!node) return false;

      node.val = val;

      return true;
   }

   insert(index, val) {
      if (index < 0 || index > this.length) {
         return false;
      }
      else if (index === 0) {
         this.unshift(val)
      }
      else if (index === this.length) {
         this.push(val)
      }
      else {
         const node = new Node(val);

         const before = this.get(index - 1);
         const after = before.next;

         before.next = node;
         node.prev = before;

         node.next = after;
         after.prev = node;

         this.length++;
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
         const removed = this.get(index);
         const before = removed.prev;
         const after = removed.next;

         before.next = after;
         after.prev = before;

         removed.prev = removed.next = null;
         this.length--;

         return removed;
      }
   }
}

const list = new DoublyLinkedList()

list.push(11)
list.push(12)
list.push(13)
list.push(14)
list.push(15)
list.push(16)
list.push(17)
list.push(18)

/* console.log(list.get(6))

list.set(6, 34)
console.log(list.get(6)) */

console.log(list.remove(1))

console.log(list)
/* Max Binary Heap */
class MaxBinaryHeap {
   constructor() {
      this.values = [41, 39, 33, 18, 27, 12]
   }

   insert(value) {
      this.values.push(value)

      this.bubbleUp()
   }

   bubbleUp() {
      let index = this.values.length - 1,
         child = this.values[index];

      while (index > 0) {
         let pIndex = Math.floor((index - 1) / 2),
            parent = this.values[pIndex];

         if (child <= parent) break;

         this.values[index] = parent;
         this.values[pIndex] = child;

         index = pIndex;
      }

   }

   extractMax() {
      const max = this.values[0],
         last = this.values.pop();

      if (this.values.length > 0) {
         this.values[0] = last;

         this.sinkDown()
      }

      return max;
   }

   sinkDown() {
      let pIndex = 0;
      const length = this.values.length;
      const parent = this.values[0];

      while (true) {
         let lIndex = (2 * pIndex) + 1;
         let rIndex = (2 * pIndex) + 2;
         let left, right, swap = null;

         if (lIndex < length) {
            left = this.values[lIndex]

            if (left > parent) {
               swap = lIndex;
            }
         }
         if (rIndex < length) {
            right = this.values[rIndex]

            if (right > parent && right > left) {
               swap = rIndex;
            }
         }

         if (swap === null) break;

         this.values[pIndex] = this.values[swap];
         this.values[swap] = parent;

         pIndex = swap;
      }
   }
}

/* const heap = new MaxBinaryHeap()

console.log(heap.values)
heap.insert(55)

console.log(heap.extractMax())
console.log(heap.extractMax())

console.log(heap.values) */


/* Priority Queue */
class Node {
   constructor(val, priority) {
      this.val = val;
      this.priority = priority;
   }
}

class PriorityQueue {
   constructor() {
      this.values = []
   }

   enqueue(val, priority) {
      const node = new Node(val, priority)
      this.values.push(node)

      this.bubbleUp()
   }

   bubbleUp() {
      let index = this.values.length - 1,
         child = this.values[index];

      while (index > 0) {
         let pIndex = Math.floor((index - 1) / 2),
            parent = this.values[pIndex];

         if (child.priority >= parent.priority) break;

         this.values[index] = parent;
         this.values[pIndex] = child;

         index = pIndex;
      }

   }

   dequeue() {
      const min = this.values[0],
         last = this.values.pop();

      if (this.values.length > 0) {
         this.values[0] = last;

         this.sinkDown()
      }

      return min;
   }

   sinkDown() {
      let pIndex = 0;
      const length = this.values.length;
      const parent = this.values[0];

      while (true) {
         let lIndex = (2 * pIndex) + 1;
         let rIndex = (2 * pIndex) + 2;
         let left, right, swap = null;

         if (lIndex < length) {
            left = this.values[lIndex]

            if (left.priority < parent.priority) {
               swap = lIndex;
            }
         }
         if (rIndex < length) {
            right = this.values[rIndex]

            if (right.priority < parent.priority && right.priority < left.priority) {
               swap = rIndex;
            }
         }

         if (swap === null) break;

         this.values[pIndex] = this.values[swap];
         this.values[swap] = parent;

         pIndex = swap;
      }
   }
}

const queue = new PriorityQueue()

queue.enqueue("common cold", 5)
queue.enqueue("gunshot wound", 1)
queue.enqueue("high fever", 4)
queue.enqueue("broken arm", 2)

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue)
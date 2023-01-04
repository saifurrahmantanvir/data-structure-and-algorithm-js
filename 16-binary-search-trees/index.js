/* Binary Search Trees */
class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insert(value) {
      const node = new Node(value)

      if (!this.root) {
         this.root = node;
         return this;
      }

      let current = this.root;

      while (true) {
         if (value === current.value) return undefined;

         if (value < current.value) {
            if (!current.left) {
               current.left = node;
               return this;
            }
            else {
               current = current.left;
            }
         }
         else if (value > current.value) {
            if (!current.right) {
               current.right = node;
               return this;
            }
            else {
               current = current.right;
            }
         }
      }
   }

   /* Mine
   contains(value) {
      if (!this.root) return false;

      let current = this.root;

      while (current.value !== value) {
         if (value < current.value) {
            if (!current.left)
               return false;

            current = current.left;
         }
         else if (value > current.value) {
            if (!current.right)
               return false;

            current = current.right;
         }
      }

      return true;
   } */

   contains(value) {
      if (!this.root) return false;

      let current = this.root, found = false;

      while (current && !found) {
         if (value < current.value) {
            current = current.left;
         }
         else if (value > current.value) {
            current = current.right;
         }
         else {
            found = true;
         }
      }

      return found;
   }

   find(value) {
      if (!this.root) return false;

      let current = this.root;

      while (current.value !== value) {
         if (value < current.value) {
            if (!current.left)
               return false;

            current = current.left;
         }
         else if (value > current.value) {
            if (!current.right)
               return false;

            current = current.right;
         }
      }

      return current;
   }

   breadthFirst() {
      let queue = [], data = [], node = this.root;

      queue.push(node)

      while (queue.length) {
         node = queue.shift()

         data.push(node.value)

         if (node.left)
            queue.push(node.left)

         if (node.right)
            queue.push(node.right)
      }

      return data
   }

   preOrder() {
      let data = [], current = this.root;

      function traverse(node) {
         data.push(node.value)

         if (node.left)
            traverse(node.left)

         if (node.right)
            traverse(node.right)
      }

      traverse(current)

      return data
   }

   postOrder() {
      let data = [], current = this.root;

      function traverse(node) {
         if (node.left)
            traverse(node.left)

         if (node.right)
            traverse(node.right)

         data.push(node.value)
      }

      traverse(current)

      return data;
   }

   inOrder() {
      let data = [], current = this.root;

      function traverse(node) {
         if (node.left)
            traverse(node.left)

         data.push(node.value)

         if (node.right)
            traverse(node.right)
      }

      traverse(current)

      return data;
   }
}

const tree = new BinarySearchTree()

tree.insert(10)
   .insert(5)
   .insert(13)
   .insert(11)

tree.insert(2).insert(16).insert(7)

console.log(tree.contains(17))

console.log(tree.breadthFirst())
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())

console.log(tree)
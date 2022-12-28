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
}

const tree = new BinarySearchTree()

tree.insert(10)
   .insert(5)
   .insert(13)
   .insert(11)

tree.insert(2).insert(16).insert(7)

console.log(tree.contains(17))

console.log(tree)
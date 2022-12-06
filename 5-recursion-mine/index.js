/* INVERTING A BINARY TREE */
const tree = { left: { left: 'a', right: 'b' }, right: { left: 'c', right: 'd' } }

const invertTree = (node) => {
   let left = node.left;

   node.left = node.right;
   node.right = left;

   if (node.left)
      invertTree(node.left)

   if (node.right)
      invertTree(node.right)
}

invertTree(tree);
console.log(tree);


/* FACTORIAL */
const factorial = (num) => {
   if (num <= 1) return 1;

   return num * factorial(num - 1)
}

console.log(factorial(5))


/* FIBONACCI */
const fibonacci = (num) => {
   if (num <= 2) {
      if (num == 0) {
         return 0;
      }
      return 1;
   }

   return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10))
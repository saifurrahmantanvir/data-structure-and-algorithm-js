/* TIME COMPLEXITY */

function addUpTo(n) {
   let total = 0;
   for (let i = 1; i <= n; i++) {
      total += i;
   }

   return total;

   /* number of operations grows proportionally with n. O(n) */
}


/* function addUpTo(n) {
   return n * (n + 1) / 2;

   always 3 operations. O(1)
}

*/

/* const start = Date.now()
console.log(addUpTo(10000000))

console.log((Date.now() - start), 'miliseconds') */

function printAll(n) {
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
         console.log(i, j)

      }
   }
}

/* SPACE COMPLEXITY */

function sum(arr) {
   let total = 0;
   for (let i = 0; i <= arr.length; i++) {
      total += arr[i];
   }

   return total;

   /* one variable 'total' and one variable 'i'. O(1) */
}

function double(arr) {
   let newarr = [];
   for (let i = 0; i < arr.length; i++) {
      newarr.push(2 * arr[i]);
   }

   return newarr

   /* the space requires for 'newarr' is proportional with the length of 'arr'. O(n)  */
}

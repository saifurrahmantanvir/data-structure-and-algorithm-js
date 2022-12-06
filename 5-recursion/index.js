/* Recursion */
function countNumbers(num) {
   if (num <= 0) return;

   console.log(num)
   num--
   countNumbers(num)
}

countNumbers(5)


const factorial = (num) => {
   if (num <= 1) return 1;

   return num * factorial(num - 1)
}

console.log(factorial(5))


/* Helper Method Recursion */
/* function collectOdds(arr) {
   let result = [];

   function helper(harr) {
      if (harr.length === 0) return

      if (harr[0] % 2 !== 0) {
         result.push(harr[0])
      }

      helper(harr.slice(1))
   }

   helper(arr)

   return result
} */


/* Pure Recursion */
function collectOdds(arr) {
   let newarr = [];

   if (arr.length === 0) return newarr

   if (arr[0] % 2 !== 0) {
      newarr.push(arr[0])
   }

   newarr = newarr.concat(collectOdds(arr.slice(1)))

   return newarr
}

console.log(collectOdds([1, 2, 3, 4, 5, 6]))
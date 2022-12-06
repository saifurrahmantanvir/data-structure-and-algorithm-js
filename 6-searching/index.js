/* Searching */

/* 1. Linear Search */
function linear(arr, val) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) return i;

   }

   return -1
}

/* console.log(linear([1, 2, 3, 3, 6], 3)) */



/* 2. Binary Search */

/* * Rather than eliminating one element at a time as we do in a linear search,
     we elimiate half of the elements at a time.
   * Only works on sorted arrays */

function binary(arr, val) {
   let start = 0;
   let end = arr.length - 1;

   /* calculate middle */
   let middle = Math.floor((start + end) / 2)

   /* if value is not equal the middle AND start is less or equal end, enter the loop */
   while (arr[middle] !== val && start <= end) {
      /* if value is less then middle move end */
      if (val < arr[middle]) {
         end = middle - 1
      }
      /* if greater then middle move start */
      else {
         start = middle + 1
      }

      /* recalculate the middle */
      middle = Math.floor((start + end) / 2)
   }

   if (arr[middle] === val) {
      return middle

   }

   return -1
}


/* function binary(arr, val) {
   let start = 0;
   let end = arr.length - 1;

   let middle = Math.floor((start + end) / 2)

   while (arr[middle] !== val && start <= end) {
      val < arr[middle]
         ? end = middle - 1
         : start = middle + 1

      middle = Math.floor((start + end) / 2)
   }

   return arr[middle] === val ? middle : -1
}

Time complexity in Big-O for binary search is O(logn)

console.log(binary([1, 2, 4, 5, 6, 7, 8, 9, 11, 14, 15, 16, 17, 19, 20], 17))
*/


/* Naive String Search */
function searchString(main, sub) {
   let count = 0;

   /* loop over the long string */
   for (let i = 0; i < main.length; i++) {
      /* loop over the short string and match character by character */
      for (let j = 0; j < sub.length; j++) {
         if (main[i + j] !== sub[j]) break;

         /* if we reach to this condition increase count */
         if (j === sub.length - 1) {
            count++;
         }
      }

   }

   return count
}

console.log(searchString('lol longlol lolto', 'lol'))

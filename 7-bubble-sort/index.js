/* Bubble Sort */
function bubbleSort(arr) {
   let noSwaps;

   for (let i = 0; i < arr.length; i++) {
      noSwaps = true;

      for (let j = 0; j < arr.length - (i + 1); j++) { /* O(n^2) */
         /* swap */
         if (arr[j] > arr[j + 1]) {
            const temp = arr[j]

            arr[j] = arr[j + 1]
            arr[j + 1] = temp;

            noSwaps = false;
         }
      }
      console.log('one pass complete')
      /* when the inner loop completes one iteration without
      any swap, that means the array is sorted and we need
      to break the loop */
      if (noSwaps) break;
   }

   return arr;
}

/* Time complexity in Big-O notation for bubble sort is O(n^2),
best case nearly O(n) */

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))

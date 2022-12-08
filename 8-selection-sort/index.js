/* Selection Sort */
function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      let min = i;

      for (let j = i + 1; j < arr.length; j++) {   /* O(n^2) */
         if (arr[j] < arr[min]) min = j;
      }

      /* if min is not the initial value, swap */
      if (i !== min) {
         let temp = arr[i]
         arr[i] = arr[min];
         arr[min] = temp;
      }
   }

   return arr
}

/* Time complexity in Big-O notation for selection sort is O(n^2) */

console.log(selectionSort([3, 4, 5, 10, 30, 20, 13, 11]))

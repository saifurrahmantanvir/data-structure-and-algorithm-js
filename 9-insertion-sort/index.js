/* Insertion Sort */
function insertionSort(arr) {
   /* start with the second element in the array */
   for (let i = 1; i < arr.length; i++) {
      let cVal = arr[i]

      /* compare the element with the ones before it */
      let j = i - 1;

      while (j >= 0 && arr[j] > cVal) {
         arr[j + 1] = arr[j];
         j--;
      }

      /* place the correct value in the right index */
      arr[j + 1] = cVal;
   }

   return arr
}

/* Time complexity in Big-O notation for insertion sort is O(n^2) */

console.log(insertionSort([8, 5, 4, 6, 7, 3, 1, 2]))

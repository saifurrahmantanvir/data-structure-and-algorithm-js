/* Quick Sort */
function pivot(arr, start = 0, end = arr.length - 1) {
   /* grab the pivot and store its index in a variable(swapIndex) */
   let pivot = arr[start]
   let swapIndex = start;

   for (let i = start + 1; i <= end; i++) {
      /* if pivot is greater then the current element, increment swapIndex which was initially the pivot index and then (1) */
      if (pivot > arr[i]) {
         swapIndex++;

         /* (1) swap the current element with the element in the swapIndex */
         [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
      }

   }

   /* swap the pivot with the element in the swapIndex */
   [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]

   return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
   /* base case */
   if (left < right) {
      let pivotIndex = pivot(arr, left, right)

      /* left */
      quickSort(arr, left, pivotIndex - 1)
      /* right */
      quickSort(arr, pivotIndex + 1, right)
   }

   return arr
}

/* Time complexity in Big-O notation for quick sort is O(n^2) in worst case, and O(nlogn) in best case, space complexity O(logn) */

console.log(quickSort([100, -2, 4, 8, 2, 1, 5, 7, 6, 3, 23]))

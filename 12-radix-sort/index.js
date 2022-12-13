/* Radix Sort */
function getDigit(num, i) {
   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
   if (num === 0) return 1;
   return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
   let max = 0;

   for (const num of arr) {
      max = Math.max(max, digitCount(num))
   }

   return max
}


function radixSort(arr) {
   const maxDigitCount = mostDigits(arr)

   for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => [])

      for (const num of arr) {
         let digit = getDigit(num, k)
         digitBuckets[digit].push(num)
      }

      arr = [].concat(...digitBuckets)
   }

   return arr
}

/* Time complexity in Big-O notation for radix sort is O(nk), space complexity
O(n + k) */

console.log(radixSort([1234, 23, 4, 354, 23453, 10, 33, 2432, 123]))

/* Problem Solving Patterns */

/****** ******* 1. Frequency Counter Pattern ******** ********//*

* This pattern uses objects or sets to collect frequencies of values
* This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

****** */


/* -------- ------- --------- ----
   Problem - Write a function 'same', which accepts 2 arrays. The function should return true if every value in first array has it's corresponding value squared in the second array. The frequency of values must be the same.
--------- */

/* function same(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false
   }

   for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i] ** 2); /* O(n^2)

      if (index === -1) {
         return false;
      }

      arr2.splice(index, 1)
   }

   return true

}

Time complexity in Big-O notation for this function is O(n^2)

console.log(same([1, 2, 3, 2], [9, 4, 1, 4])); */



/******* Solution *********/
function same(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false
   }

   const fCounter1 = {}, fCounter2 = {}

   for (const val of arr1) {
      fCounter1[val] = (fCounter1[val] || 0) + 1;
   }

   for (const val of arr2) {
      fCounter2[val] = (fCounter2[val] || 0) + 1;
   }

   for (const key in fCounter1) {
      /* matching keys */
      if (!(key ** 2 in fCounter2)) {
         return false
      }

      /* matching values */
      if (fCounter2[key ** 2] !== fCounter1[key]) {
         return false
      }
   }

   return true
}

/* Big-O for this function is O(n)

console.log(same([1, 2, 6, 3, 2], [9, 4, 1, 4])); */


/* -------- ------- --------- ----
   Problem - Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
--------- */

/******** My Solution *********/

/* function anagram(str1, str2) {
   /* check if both strings has same length
   if (str1.length !== str2.length) {
      return false
   }

   /* create frequency obj for both strings
   const fCounter1 = {}, fCounter2 = {};

   /* populate both objects
   for (const letter of str1) {
      fCounter1[letter] ? fCounter1[letter]++ : fCounter1[letter] = 1;
   }

   for (const letter of str2) {
      fCounter2[letter] ? fCounter2[letter]++ : fCounter2[letter] = 1;
   }

   /* check if both has same value for same key
   for (const letter in fCounter1) {
      if (fCounter1[letter] !== fCounter2[letter]) {
         return false
      }
   }

   return true
}

console.log(anagram('string', 'string')); */

function anagram(str1, str2) {
   if (str1.length !== str2.length) {
      return false
   }

   const fCounter = {};

   for (const letter of str1) {
      fCounter[letter] ? fCounter[letter]++ : fCounter[letter] = 1;
   }

   for (const letter of str2) {
      if (!fCounter[letter]) {
         return false
      } else {
         fCounter[letter]--;

      }
   }

   return true
}

/* console.log(anagram('strig', 'string')); */











/****** ******* 2. Multiple Pointers Pattern ******** ********//*

* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
* Very efficient for solving problems with minimal space complexity as well.

*******/


/* -------- ------- --------- ----
   Problem - Write a function 'sumZero' that accepts a sorted array of intergers. The function should find the first pair where the sum is 0. Return an array that includess both values that sum to zero or undefined if a pair does not exist
*/

/* function sumZero(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {  /* O(n^2)
         if (arr[i] + arr[j] === 0) {
            return [arr[i], arr[j]]
         }

      }

   }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3])); */


/******** Solution **********/
function sumZero(arr) {
   let left = 0;
   let right = arr.length - 1;

   while (left < right) {
      let sum = arr[left] + arr[right]

      if (sum === 0) {
         return [arr[left], arr[right]]
      }
      else if (sum > 0) {
         right--;
      }
      else {
         left++;
      }
   }

}

/* Big-O for this function is O(n)

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); */


/* -------- ------- --------- ----
   Problem - Implement a function called 'countUniqueValues' that accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
-------- */

function countUniqueValues(arr) {
   if (!arr.length) return 0;

   /******** My Solution ********/
   /* declare two tracker
   let i = 0, j = 1;

   /* loop over the array
   while (j < arr.length) {
      /* if i is not equal j set arr[i] to arr[j] and increment j
      if (arr[i] !== arr[j]) {
         i++
         arr[i] = arr[j]
      }
      /* if i is equal j increment j
      j++;
   }
   */

   for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
         i++;
         arr[i] = arr[j];
      };

   }

   console.log(arr);
   return i + 1
}

/* console.log(countUniqueValues([-7, 1, 5, 6, 6]))
console.log(countUniqueValues([1, 2, 3, 3, 4, 5, 6, 6])); */












/****** ******* 3. Sliding Window Pattern ******** ********//*

* This pattern involves creating a window which can either be an array or number from one position to another
* Depending on a certain condition, the window either increases or closes(and a new window is created)
* Very useful for keeping track of a subset of data in an array/string etc.

*********/


/* -------- ------- --------- ----
   Problem - Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
-------- */

/* function maxSubarraySum(arr, num) {
   if (num > arr.length) {
      return null
   }

   let max = -Infinity;

   for (let i = 0; i < arr.length - num + 1; i++) {
      let temp = 0;

      for (let j = 0; j < num; j++) {  /* O(n^2)
         temp += arr[i + j];

      }

      if (temp > max) {
         max = temp
      }

   }

   return max
} */

/********* Solution ********/
function maxSubarraySum(arr, num) {
   let max = 0, temp = 0;

   if (num > arr.length) {
      return null
   }

   for (let i = 0; i < num; i++) {
      max += arr[i];

   }

   temp = max;

   for (let i = num; i < arr.length; i++) {
      temp = temp - arr[i - num] + arr[i];

      max = Math.max(max, temp)
   }

   return max
}

/* Time complexity in Big-O notation for this function is O(n)

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)), 17 */










/****** ******* 4. Divide and Conquer Pattern ******** ********//*

* This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
* This pattern can tremendously decrease time complexity

*********/


/* -------- ------- --------- ----
   Problem - Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
---------- */

/******** Linear Search **********/
/* function search(arr, val) {
   for (let i = 0; i < arr.length; i++) { /* O(n)
      if (arr[i] === val) {
         return i
      }

   }
   return -1
}
*/


/********* Binary Search *********/
function search(arr, val) {
   let min = 0, max = arr.length - 1;

   while (min <= max) {
      let middle = Math.floor((min + max) / 2)
      let cElement = arr[middle]

      if (arr[middle] < val) {
         min = middle + 1
      }
      else if (arr[middle] > val) {
         max = middle - 1
      }
      else {
         return middle
      }
   }

   return -1
}

/* Big-O of this function is O(logn) */
/* Problem Solving Approach

1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve/Simplify
5. Look back and refactor

*/


const string = 'This is tanvir 112344!';

const chatCount = function (string) {
   /* create object and return at end */
   const result = {};

   /* loop over string, for each char */
   for (let char of string) {
      const regex = /[a-z0-9]/i;

      /* 1. if char is not a num/letter, don't do anything */
      if (regex.test(char)) {
         char = char.toLowerCase();
         /* 2. if char is a num/letter AND is a key in object,
         and one to count */
         result[char] ? result[char]++ : result[char] = 1;

         /* 3. if not in object, add it to object and set value to 1 */
      }

   }

   return result; /* return object at end */
}

console.log(chatCount(string))
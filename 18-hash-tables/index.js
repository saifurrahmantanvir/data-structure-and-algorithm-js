/* Hash Tables */
class HashTable {
   constructor(size = 53) {
      this.keyMap = new Array(size)
   }

   _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;

      for (let i = 0; i < Math.min(key.length, 100); i++) {
         let char = key[i]
         let value = char.charCodeAt(0) - 96;

         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }

      return total
   }

   set(key, value) {
      const index = this._hash(key)

      if (!this.keyMap[index]) {
         this.keyMap[index] = []
      }

      this.keyMap[index].push([key, value])
   }

   get(key) {
      const index = this._hash(key)

      if (this.keyMap[index]) {
         for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
               return this.keyMap[index][i][1]
            }
         }
      }

      return undefined;
   }

   values() {
      const values = []

      for (let i = 0; i < this.keyMap.length; i++) {
         if (this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
               if (!values.includes(this.keyMap[i][j][1])) {
                  values.push(this.keyMap[i][j][1])
               }
            }
         }
      }

      return values;
   }

   keys() {
      const keys = []

      for (let i = 0; i < this.keyMap.length; i++) {
         if (this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
               if (!keys.includes(this.keyMap[i][j][0])) {
                  keys.push(this.keyMap[i][j][0])
               }
            }
         }
      }

      return keys;
   }
}

const ht = new HashTable(11)

console.log(ht.set('maroon', '#800000'))
console.log(ht.set('yellow', '#ffff00'))
console.log(ht.set('olive', '#808000'))
console.log(ht.set('salmon', '#fa8072'))
console.log(ht.set('plum', '#dda0dd'))
console.log(ht.set('violet', '#dda0dd'))
console.log(ht.set('purple', '#dda0dd'))
console.log(ht.set('lightcoral', '#f08080'))

console.log(ht.values())
console.log(ht.keys())
console.log(ht)
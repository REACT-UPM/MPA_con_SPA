//file to understand the methods of arrays in javascript, find, some, every, includes, map, filter and reduce

// 1. Find Method
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => number > 3);
console.log(foundNumber); // Output: 4

// 2. Some Method
const someNumbers = [1, 2, 3, 4, 5];
const hasSomeEvenNumber = someNumbers.some((number) => number % 2 === 0);
console.log(hasSomeEvenNumber); // Output: true

// 3. Every Method
const allNumbers = [2, 4, 6, 8, 10];
const allEvenNumbers = allNumbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers); // Output: true

// 4. Includes Method
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const hasBanana = fruits.includes('Banana');
console.log(hasBanana); // Output: true

// 5. Map Method
const numbersArray = [1, 2, 3, 4, 5];
const squaredNumbers = numbersArray.map((number) => number ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 6. Filter Method
const mixedNumbers = [1, 2, 3, 4, 5];
const evenNumbers = mixedNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// 7. Reduce Method
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 15

// 8. Chaining Array Methods
const mixedValues = [1, 2, 3, 4, 5];
const result = mixedValues
  .map((value) => value * 2)
  .filter((value) => value > 5)
  .reduce((accumulator, value) => accumulator + value, 0);

console.log(result); // Output: 24

// 9. Using Array Methods with Objects
const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const names = persons.map((person) => person.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

const totalAge = persons.reduce((accumulator, person) => accumulator + person.age, 0);
console.log(totalAge); // Output: 90

// 10. Using Array Methods with Strings
const sentence = 'The quick brown fox jumps over the lazy dog';
const words = sentence.split(' ');
const wordLengths = words.map((word) => word.length);
const totalCharacters = wordLengths.reduce((total, length) => total + length, 0);

console.log(totalCharacters); // Output: 44





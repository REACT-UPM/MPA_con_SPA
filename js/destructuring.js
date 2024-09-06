// 1. Object Destructuring
const person = {
    name: 'Juan',
    age: 30,
    address: {
      city: 'Madrid',
      country: 'Spain',
    },
  };
  
  // Extracting values from an object
  const { name, age } = person;
  console.log(name); // Output: Juan
  console.log(age);  // Output: 30
  
  // Extracting nested values and renaming them
  const { address: { city: ciudad, country: pais } } = person;
  console.log(ciudad); // Output: Madrid
  console.log(pais);   // Output: Spain
  
  // 2. Array Destructuring
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  
  // Extracting values from an array
  const [firstFruit, secondFruit] = fruits;
  console.log(firstFruit); // Output: Apple
  console.log(secondFruit); // Output: Banana
  
  // Skipping elements
  const [, , thirdFruit] = fruits;
  console.log(thirdFruit); // Output: Cherry
  
  // Using rest syntax with arrays
  const [first, ...restFruits] = fruits;
  console.log(first); // Output: Apple
  console.log(restFruits); // Output: ['Banana', 'Cherry', 'Date']
  
  // 3. Spread Operator
  
  // Merging two arrays
  const moreFruits = ['Elderberry', 'Fig'];
  const allFruits = [...fruits, ...moreFruits];
  console.log(allFruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig']
  
  // Cloning and merging objects
  const personClone = { ...person }; // Cloning the person object
  personClone.name = 'Pedro';
  console.log(person);      // Output: { name: 'Juan', age: 30, address: { city: 'Madrid', country: 'Spain' } }
  console.log(personClone); // Output: { name: 'Pedro', age: 30, address: { city: 'Madrid', country: 'Spain' } }
  
  const updatedPerson = { ...person, profession: 'Engineer' }; // Merging new properties
  console.log(updatedPerson); 
  // Output: { name: 'Juan', age: 30, address: { city: 'Madrid', country: 'Spain' }, profession: 'Engineer' }
  
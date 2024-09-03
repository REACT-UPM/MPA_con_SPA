function testVarLetConst() {
    console.log('Example of var, let, and const differences:');
  
    // 1. Scope Differences
    if (true) {
      var varVariable = 'I am a var';
      let letVariable = 'I am a let';
      const constVariable = 'I am a const';
      
      console.log(varVariable);   // Output: I am a var
      console.log(letVariable);   // Output: I am a let
      console.log(constVariable); // Output: I am a const
    }
  
    console.log(varVariable);   // Output: I am a var (function-scoped)
  //   console.log(letVariable);   // Error: letVariable is not defined (block-scoped)
  //   console.log(constVariable); // Error: constVariable is not defined (block-scoped)
  
    // 2. Re-declaration and Updating Differences
    var varVariable = 'I can be re-declared and updated'; // No problem with var
    console.log(varVariable); // Output: I can be re-declared and updated
  
    // let letVariable = 'Cannot be re-declared'; // Error: letVariable has already been declared
    letVariable = 'I can be updated'; // Updating let is allowed
    console.log(letVariable); // Output: I can be updated
  
    // const constVariable = 'Cannot be re-declared'; // Error: constVariable has already been declared
    // constVariable = 'Cannot be updated'; // Error: Assignment to constant variable.
    
    // 3. Hoisting Differences
    console.log(varHoisted); // Output: undefined (hoisted but not initialized)
  //   console.log(letHoisted); // Error: Cannot access 'letHoisted' before initialization (temporal dead zone)
  //   console.log(constHoisted); // Error: Cannot access 'constHoisted' before initialization (temporal dead zone)
  
    var varHoisted = 'I am a hoisted var';
    let letHoisted = 'I am a hoisted let';
    const constHoisted = 'I am a hoisted const';
  
    console.log(varHoisted); // Output: I am a hoisted var
    console.log(letHoisted); // Output: I am a hoisted let
    console.log(constHoisted); // Output: I am a hoisted const
  
    // 4. Const and Mutability
    const myArray = [1, 2, 3];
    myArray.push(4); // Allowed: modifying the contents of the array
    console.log(myArray); // Output: [1, 2, 3, 4]
  
  //   myArray = [5, 6, 7]; // Error: Assignment to constant variable
  
    const myObject = { name: 'Alice' };
    myObject.name = 'Bob'; // Allowed: modifying a property of the object
    console.log(myObject); // Output: { name: 'Bob' }
  
  //   myObject = { name: 'Charlie' }; // Error: Assignment to constant variable
  }
  
  testVarLetConst();
  
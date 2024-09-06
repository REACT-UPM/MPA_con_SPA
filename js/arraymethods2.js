const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, quantity: 4 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 800, quantity: 10 },
    { id: 3, name: 'TV', category: 'Electronics', price: 1500, quantity: 3 },
    { id: 4, name: 'Shirt', category: 'Clothing', price: 30, quantity: 20 },
    { id: 5, name: 'Shoes', category: 'Clothing', price: 100, quantity: 15 },
    { id: 6, name: 'Blender', category: 'Home Appliances', price: 60, quantity: 5 }
  ];
  
  // 1. map(): Transforming the array into a new array with only product names
  const productNames = products.map(product => product.name);
  console.log('Product Names:', productNames); 
  // Output: ['Laptop', 'Phone', 'TV', 'Shirt', 'Shoes', 'Blender']
  
  // 2. some(): Checking if there are any products in the "Clothing" category
  const hasClothing = products.some(product => product.category === 'Clothing');
  console.log('Contains Clothing?', hasClothing); 
  // Output: true
  
  // 3. includes(): Checking if a certain product name is in the product names array
  const hasLaptop = productNames.includes('Laptop');
  console.log('Includes Laptop?', hasLaptop); 
  // Output: true
  
  // 4. filter(): Filtering products that cost more than $100
  const expensiveProducts = products.filter(product => product.price > 100);
  console.log('Expensive Products:', expensiveProducts);
  // Output: [{ id: 1, name: 'Laptop', ... }, { id: 2, name: 'Phone', ... }, { id: 3, name: 'TV', ... }]
  
  // 5. reduce(): Calculating the total value of all products in stock (price * quantity)
  const totalInventoryValue = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  console.log('Total Inventory Value:', totalInventoryValue); 
  // Output: 22200
  
  // 6. every(): Checking if all products are in stock (quantity > 0)
  const allInStock = products.every(product => product.quantity > 0);
  console.log('All Products in Stock?', allInStock); 
  // Output: true
  
  // 7. find(): Finding the first product in the "Electronics" category
  const firstElectronicsProduct = products.find(product => product.category === 'Electronics');
  console.log('First Electronics Product:', firstElectronicsProduct); 
  // Output: { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, quantity: 4 }
  
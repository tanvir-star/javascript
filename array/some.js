const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" }
  ];
  
  const productIdToCheck = 2;
  const productExists = products.some(item => item.id === productIdToCheck);
  console.log(productExists); // Outputs: true
  
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 }
  ];
  
  const productId = 2;
  const productToUpdate = products.find(item => item.id === productId);
  if (productToUpdate) {
    productToUpdate.price = 25;
  }
  console.log(products);
  
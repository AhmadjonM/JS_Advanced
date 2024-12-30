const formEl = document.getElementById('add-product-form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const product = Object.fromEntries(formData);

  if (
    typeof parseFloat(product.price) !== 'number' ||
    typeof parseFloat(product.oldPrice) !== 'number') {
    alert('Price and old price must be numbers');  
  }

  const formattedProduct = {
    ...product,
    id: Date.now(),
    price: parseFloat(product.price),
    oldPrice: product.oldPrice ? parseFloat(product.oldPrice) : null,
    salePercent: product.oldPrice 
      ? ((product.oldPrice - product.price) / product.oldPrice) * 100
      : null,
  };

  console.log(formattedProduct);
  
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push(formattedProduct);
  localStorage.setItem('products', JSON.stringify(products));

  event.target.reset();
  // Redirect to main page
  window.location.href = './index.html';
});

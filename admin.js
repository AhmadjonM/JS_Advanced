const products = JSON.parse(localStorage.getItem('products'));

const productsContainer = document.querySelector('.products-container');

products.forEach(product => {
  const newProduct = document.createElement('div');
  
  newProduct.classList.add('card');
  newProduct.innerHTML = `
      <img src="${product.imgUrl}" alt="product">
      ${product.salePercent ? `<span class="sale_badge">-${product.salePercent}%</span>`: ''}
      <div class="prices">
        <span class="price">${product.price} с.</span>
        ${product.oldPrice ? `<span class="old_price">${product.oldPrice} c.</span>`: ''}
      </div>
      <span class="title">${product.title}</span>
      <button class="edit" data-id="${product.id}">
        Редактировать
      </button>
      <button class="remove" data-id="${product.id}">
        Удалить
      </button>
  `;

  productsContainer.appendChild(newProduct);
})

productsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    const productId = event.target.dataset.id;

    const updatedProducts = products.filter(product => product.id !== +productId);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    window.location.reload();
  }

  
}); 

productsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const productId = event.target.dataset.id;
    const product = products.find(product => product.id === +productId);
    if (product) {
      const newTitle = prompt('Введите новое название:', product.title);
      const newPrice = prompt('Введите новую цену:', product.price);
      if (newTitle && newPrice) {
        product.title = newTitle;
        product.price = parseFloat(newPrice);
        localStorage.setItem('products', JSON.stringify(products));
        window.location.reload();
      }
    }
  }
});

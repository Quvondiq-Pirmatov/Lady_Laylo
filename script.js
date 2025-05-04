// === MAHSULOT QO‘SHISH (INDEX.HTML UCHUN) ===
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
  cartItems.push(product);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  alert(`${product.name} savatchaga qo‘shildi!`);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const name = card.querySelector('.product-name').innerText;
    const price = card.querySelector('.product-price').innerText;
    const imgSrc = card.querySelector('img').getAttribute('src');

    const product = { name, price, imgSrc };
    addToCart(product);
  });
});

// Mahsulotni savatchaga qo'shish
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.closest('.product-card').querySelector('h3').textContent;
        const productPrice = button.closest('.product-card').querySelector('.product-price').textContent;
        const productImage = button.closest('.product-card').querySelector('img').src;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Mahsulotni savatchaga qo'shish
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage
        });

        // Savatcha yangilandi
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});



// === ZAKAZLAR SAHIFASI (ZAKAZLAR.HTML) ===
// if (window.location.pathname.includes('zakazlar.html')) {
//   const orderContainer = document.querySelector('.order-list');
//   const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

//   if (orderContainer && savedOrders.length > 0) {
//     savedOrders.forEach(order => {
//       const div = document.createElement('div');
//       div.classList.add('cart-item');
//       div.innerHTML = `
//         <img src="${order.imgSrc}" alt="${order.name}">
//         <div class="cart-item-details">
//           <h4>${order.name}</h4>
//           <p>${order.price}</p>
//         </div>
//       `;
//       orderContainer.appendChild(div);
//     });
//   } else if (orderContainer) {
//     orderContainer.innerHTML = '<p>Buyurtmalar mavjud emas.</p>';
//   }
// }

//   zakazlar.html sahifasida buyurtmachining ma’lumotlarini ko‘rsatamiz:
/*
const itemsHtml = order.items.map(item => `
    <li>${item.name} - ${item.price}</li>
`).join('');

return `
    <div class="order">
        <h3>Buyurtma: ${new Date(order.date).toLocaleString()}</h3>
        <p><strong>Ism:</strong> ${order.customer.fullName}</p>
        <p><strong>Telefon:</strong> ${order.customer.phone}</p>
        <p><strong>Telegram:</strong> @${order.customer.telegram}</p>
        <ul>${itemsHtml}</ul>
    </div>
`;
*/
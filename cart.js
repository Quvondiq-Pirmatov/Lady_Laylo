// Savatcha mahsulotlarini ko'rsatish
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Savatda hech qanday mahsulot yo‘q.</p>';
        totalPriceElement.textContent = '0 UZS';
    } else {
        let totalPrice = 0;
        cartItemsContainer.innerHTML = cart.map((item, index) => {
            totalPrice += parseInt(item.price.replace(/\D/g, ''), 10);
            return `
                <div class="cart-item" data-index="${index}">
                    <img src="${item.name}.jpg" alt="${item.name}" />
                    <div>
                        <h3>${item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
                </div>
            `;
        }).join('');

        totalPriceElement.textContent = totalPrice.toLocaleString() + ' UZS';
    }
}

// Savatdan mahsulotni o‘chirish
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // yangilash
}

// Buyurtma berish
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const telegram = document.getElementById('telegram').value.trim();

    if (!cart.length) {
        alert("Savatcha bo‘sh!");
        return;
    }

    if (!fullName || !phone) {
        alert("Iltimos, Ismingiz va telefon nomeringizni kiriting!");
        return;
    }

    if (confirm('Buyurtmangizni tasdiqlaysizmi?')) {
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        const newOrder = {
            id: Date.now(),
            items: cart,
            date: new Date().toLocaleString(),
            customer: {
                fullName,
                phone,
                telegram
            }
        };

        existingOrders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
        localStorage.removeItem('cart');

        alert('Buyurtma qabul qilindi!');
        window.location.href = 'index.html';
    }
}

// Sahifa yuklanganda savatchani ko‘rsatish
displayCart();

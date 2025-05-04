 // Buyurtmalarni olish va ko'rsatish
 document.addEventListener('DOMContentLoaded', () => {
    const ordersContainer = document.getElementById('orders-list');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p>Hozircha hech qanday buyurtma yo‘q.</p>';
        return;
    }

    ordersContainer.innerHTML = orders.map(order => {
        return `
            <div class="order-item">
                <h3>${order.name} (${order.phone})</h3>
                <p>Telegram: @${order.telegram}</p>
                <ul>
                    ${order.cart.map(item => `<li>${item.name} - ${item.price}</li>`).join('')}
                </ul>
            </div>
        `;
    }).join('');
});
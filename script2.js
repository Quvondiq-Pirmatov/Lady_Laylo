// Savatchaga mahsulot qo‘shish
let cart = [];

// Mahsulotlar
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Savatchaga qo‘shish funksiyasi
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;

        const product = {
            name: productName,
            price: productPrice
        };

        cart.push(product);
        alert(`${productName} savatchaga qo‘shildi!`);
    });
});

// Filtrlar
const priceFilter = document.getElementById('price-filter');
const brandFilter = document.getElementById('brand-filter');

priceFilter.addEventListener('change', filterProducts);
brandFilter.addEventListener('change', filterProducts);

function filterProducts() {
    const priceValue = priceFilter.value;
    const brandValue = brandFilter.value;

    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const price = parseFloat(product.querySelector('.product-price').textContent.replace('so‘m', '').trim());
        const brand = product.querySelector('.product-name').textContent.toLowerCase();

        let priceMatch = true;
        let brandMatch = true;

        // Filtrlarni tekshirish
        if (priceValue && price > parseFloat(priceValue)) {
            priceMatch = false;
        }

        if (brandValue && !brand.includes(brandValue.toLowerCase())) {
            brandMatch = false;
        }

        // Mahsulotni ko'rsatish yoki yashirish
        if (priceMatch && brandMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Modal oynalar (Mahsulot haqida batafsil)
const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('product-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModalButton = modal.querySelector('.close');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('.product-name').textContent;
        const productPrice = card.querySelector('.product-price').textContent;
        const productImage = card.querySelector('img').src;

        modalContent.innerHTML = `
            <img src="${productImage}" alt="${productName}" />
            <h2>${productName}</h2>
            <p>Price: ${productPrice}</p>
        `;

        modal.style.display = 'block';
    });
});

// Modalni yopish
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Zakazlar sahifasiga o'tish (login parol orqali)
const loginButton = document.getElementById('login-button');
const zakazlarPage = document.getElementById('zakazlar-page');
const loginForm = document.getElementById('login-form');
const loginInput = document.getElementById('login-input');
const passwordInput = document.getElementById('password-input');

loginButton.addEventListener('click', () => {
    const login = loginInput.value;
    const password = passwordInput.value;

    if (login === 'admin' && password === '12345') {
        zakazlarPage.style.display = 'block';
        alert('Tizimga muvaffaqiyatli kirildi!');
    } else {
        alert('Login yoki parol noto‘g‘ri.');
    }
});

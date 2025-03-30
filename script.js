let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(listItem);
    });

    total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = total;
}
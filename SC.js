let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPriceElem = document.getElementById("total-price");

    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElem.innerText = `Total Price: $${totalPrice}`;
}
const cartData = localStorage.getItem('cart');
const cart = cartData ? JSON.parse(cartData) : { items: [], total: 0 };

function addToCart(event) {
  const item = event.target.dataset.item;
  const price = parseFloat(event.target.dataset.price);
  const quantity = parseInt(event.target.parentNode.querySelector('.item-quantity').value);

  const cartItem = {
    item: item,
    price: price,
    quantity: quantity
  };

  cart.items.push(cartItem);
  cart.total += price * quantity;
  updateCart();
  updateCartData();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  cartItemsElement.innerHTML = '';

  cart.items.forEach((cartItem) => {
    const li = document.createElement('li');
    const formattedPrice = (cartItem.price * cartItem.quantity).toFixed(2);
    li.textContent = `${cartItem.item} x ${cartItem.quantity} - ₱${formattedPrice}`;
    cartItemsElement.appendChild(li);
  });

  const formattedTotal = cart.total.toFixed(2);
  cartTotalElement.textContent = `Total: ₱${formattedTotal}`;
}

function clearCart() {
  cart.items = [];
  cart.total = 0;
  updateCart();
  updateCartData();
}

function updateCartData() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const item = button.dataset.item;
    const price = parseFloat(button.dataset.price);
    addToCart(event);
  });
});

const viewCartButton = document.querySelector('.view-cart-button');
viewCartButton.addEventListener('click', () => {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html';
});







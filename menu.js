
var cartItems = [];

function addToCart(itemName, itemPrice) {
  var item = {
    name: itemName,
    price: itemPrice
  };

  cartItems.push(item);
}

function updateCartAndShowModal() {
  updateCart();
  showCart();
}

function updateCart() {
  var cartItemsList = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");

  cartItemsList.innerHTML = "";

  cartItems.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.textContent = item.name + " - ₱" + item.price.toFixed(2);
    cartItemsList.appendChild(listItem);
  });
  var total = calculateTotal(cartItems);
  cartTotal.textContent = "Total: ₱" + total.toFixed(2);
}

function showCart() {
  var modal = document.getElementById("cart-modal");
  modal.style.display = "block";
}

function closeCartModal() {
  var modal = document.getElementById("cart-modal");
  modal.style.display = "none";
}
function placeOrder() {
  var cartItems = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");
  
  if (cartItems.children.length === 0) {
    alert("Your cart is empty. Please add items before placing an order.");
  } else {
    alert("Your order is placed!");
    cartItems.innerHTML = "";
    cartTotal.textContent = "Total: ₱0.00";
  }
}

function calculateTotal(cartItems) {
  var total = 0;
  cartItems.forEach(function (item) {
    total += item.price;
  });
  return total;
}



addToCart("Aroma Rice", 15.99);
addToCart("Garlic Rice", 12.99);
addToCart("Iced Tea", 30.99);

updateCartAndShowModal();

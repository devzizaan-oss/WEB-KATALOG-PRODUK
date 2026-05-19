// ========================= //
// ETHOS CART SYSTEM
// ========================= //

// ========================= //
// STATE MANAGEMENT
// ========================= //

let cart = JSON.parse(localStorage.getItem("ethos_cart")) || [];

// ========================= //
// DOM ELEMENTS (CACHE)
// ========================= //

const cartButton = document.querySelector(".cart-button");
const cartPanel = document.querySelector(".cart-panel");
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotalEl = document.querySelector(".cart-total");
const cartCountEl = document.querySelector(".cart-count");

// ========================= //
// SAVE CART
// ========================= //

function saveCart() {
  localStorage.setItem("ethos_cart", JSON.stringify(cart));
}

// ========================= //
// UPDATE UI
// ========================= //

function updateCartUI() {
  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const el = document.createElement("div");
    el.classList.add("cart-item");

    el.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p>Rp ${item.price.toLocaleString("id-ID")}</p>
      </div>

      <div class="cart-item-actions">
        <button class="qty-minus">-</button>
        <span>${item.qty}</span>
        <button class="qty-plus">+</button>
        <button class="remove">x</button>
      </div>
    `;

    // QTY CONTROL
    el.querySelector(".qty-plus").addEventListener("click", () => {
      cart[index].qty++;
      saveCart();
      updateCartUI();
    });

    el.querySelector(".qty-minus").addEventListener("click", () => {
      cart[index].qty--;

      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }

      saveCart();
      updateCartUI();
    });

    el.querySelector(".remove").addEventListener("click", () => {
      cart.splice(index, 1);
      saveCart();
      updateCartUI();
    });

    cartItemsContainer.appendChild(el);
  });

  // TOTAL
  if (cartTotalEl) {
    cartTotalEl.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  }

  // COUNT
  if (cartCountEl) {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    cartCountEl.textContent = count;
  }
}

// ========================= //
// ADD TO CART
// ========================= //

function addToCart(product) {
  const existing = cart.find((i) => i.title === product.title);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }

  saveCart();
  updateCartUI();
}

// ========================= //
// PRODUCT INTEGRATION
// ========================= //

document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("dblclick", () => {
    addToCart({
      title: card.dataset.title,
      price: parseInt(card.dataset.price.replace(/\D/g, "")),
      image: card.dataset.image,
    });
  });
});

// ========================= //
// CART TOGGLE
// ========================= //

if (cartButton && cartPanel) {
  cartButton.addEventListener("click", () => {
    cartPanel.classList.toggle("active");
  });
}

// ========================= //
// INIT
// ========================= //

updateCartUI();

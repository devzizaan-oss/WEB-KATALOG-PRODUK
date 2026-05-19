// ========================= //
// PRODUCT POPUP SYSTEM
// ========================= //

const popup = document.querySelector(".product-popup");

const popupImg = document.querySelector("#popup-img");
const popupTitle = document.querySelector("#popup-title");
const popupPrice = document.querySelector("#popup-price");
const popupOrder = document.querySelector("#popup-order");

const closeBtn = document.querySelector(".close-popup");
const overlay = document.querySelector(".popup-overlay");

const productCards = document.querySelectorAll(".product-card");

// OPEN POPUP

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const price = card.dataset.price;
    const image = card.dataset.image;

    popupImg.src = image;
    popupTitle.textContent = title;
    popupPrice.textContent = price;

    popupOrder.href =
      `https://wa.me/6282298938361?text=` +
      encodeURIComponent(`Saya ingin order ${title} - ${price}`);

    popup.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

// CLOSE POPUP

function closePopup() {
  popup.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});

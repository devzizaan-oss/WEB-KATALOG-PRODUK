// ========================= //
// CUSTOM CURSOR SYSTEM
// ========================= //

const cursor = document.querySelector(".cursor");

if (cursor) {
  let mouseX = 0;
  let mouseY = 0;

  let currentX = 0;
  let currentY = 0;

  // TRACK MOUSE POSITION

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // SMOOTH FOLLOW (lerp)

  function animateCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // HOVER STATE ELEMENTS

  const hoverTargets = document.querySelectorAll(
    "a, button, .product-card, .catalog-card",
  );

  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });
  });
}

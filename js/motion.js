// ========================= //
// ETHOS MOTION ENGINE (STABLE)
// ========================= //

// CENTRAL MOTION STATE

const motionState = {
  scrollY: 0,
  mouseX: 0,
  mouseY: 0,
};

// ========================= //
// INPUT TRACKING
// ========================= //

window.addEventListener(
  "scroll",
  () => {
    motionState.scrollY = window.scrollY;
  },
  { passive: true },
);

window.addEventListener(
  "mousemove",
  (e) => {
    motionState.mouseX = e.clientX;
    motionState.mouseY = e.clientY;
  },
  { passive: true },
);

// ========================= //
// HERO PARALLAX (SAFE LAYER)
// ========================= //

const heroContent = document.querySelector(".hero-content");

// ========================= //
// PRODUCT CARDS (3D SAFE LAYER)
// ========================= //

const cards = document.querySelectorAll(".product-card, .catalog-card");

// ========================= //
// MAIN RENDER LOOP
// ========================= //

function renderMotion() {
  const { scrollY, mouseX, mouseY } = motionState;

  // -------------------------
  // HERO PARALLAX
  // -------------------------

  if (heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
  }

  // -------------------------
  // 3D CARD SYSTEM (SOFT FOLLOW)
  // -------------------------

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();

    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const deltaX = mouseX - cardCenterX;
    const deltaY = mouseY - cardCenterY;

    const rotateX = deltaY * -0.01;
    const rotateY = deltaX * 0.01;

    card.style.transform = `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-6px)`;
  });

  requestAnimationFrame(renderMotion);
}

// ========================= //
// START ENGINE
// ========================= //

renderMotion();

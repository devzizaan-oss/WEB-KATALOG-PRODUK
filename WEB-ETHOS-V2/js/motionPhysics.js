// ========================= //
// ETHOS MOTION PHYSICS ENGINE
// ========================= //

// ========================= //
// STATE
// ========================= //

const state = {
  mouseX: 0,
  mouseY: 0,

  smoothX: 0,
  smoothY: 0,

  velocityX: 0,
  velocityY: 0,
};

// ========================= //
// CONFIG (TUNING CORE)
// ========================= //

const config = {
  smoothness: 0.08, // lower = more delay (heavier feel)
  damping: 0.85, // inertia decay
  intensity: 0.015, // 3D rotation strength
  springBack: 0.12, // return force
};

// ========================= //
// ELEMENTS
// ========================= //

const cards = document.querySelectorAll(".product-card, .catalog-card");

const hero = document.querySelector(".hero-content");

// ========================= //
// MOUSE TRACKING
// ========================= //

window.addEventListener(
  "mousemove",
  (e) => {
    state.mouseX = e.clientX;
    state.mouseY = e.clientY;
  },
  { passive: true },
);

// ========================= //
// PHYSICS LOOP
// ========================= //

function animate() {
  // -------------------------
  // SMOOTH FOLLOW (LERP)
  // -------------------------

  state.smoothX += (state.mouseX - state.smoothX) * config.smoothness;

  state.smoothY += (state.mouseY - state.smoothY) * config.smoothness;

  // -------------------------
  // VELOCITY CALC
  // -------------------------

  state.velocityX = (state.mouseX - state.smoothX) * config.damping;

  state.velocityY = (state.mouseY - state.smoothY) * config.damping;

  // -------------------------
  // HERO FLOAT (SPRING EFFECT)
  // -------------------------

  if (hero) {
    const heroMoveX = state.velocityX * 0.02;
    const heroMoveY = state.velocityY * 0.02;

    hero.style.transform = `translate(${heroMoveX}px, ${heroMoveY}px)`;
  }

  // -------------------------
  // CARD PHYSICS 3D
  // -------------------------

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();

    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const diffX = state.smoothX - cardCenterX;
    const diffY = state.smoothY - cardCenterY;

    const rotateX = diffY * config.intensity;
    const rotateY = diffX * -config.intensity;

    const translateY = Math.abs(rotateX + rotateY) * 0.5;

    card.style.transform = `perspective(1200px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(${-translateY}px)
       scale(1.02)`;
  });

  requestAnimationFrame(animate);
}

// ========================= //
// INIT ENGINE
// ========================= //

animate();

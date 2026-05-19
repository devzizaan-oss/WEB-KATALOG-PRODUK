// ========================= //
// ETHOS MAIN JS
// ========================= //

// ========================= //
// LOADER
// ========================= //

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    loader.classList.add("hidden");

    document.body.style.overflow = "auto";
  }, 1800);
});

// ========================= //
// NAVBAR SCROLL EFFECT
// ========================= //

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.75)";

    navbar.style.backdropFilter = "blur(14px)";

    navbar.style.padding = "18px 8%";
  } else {
    navbar.style.background = "rgba(0,0,0,0.35)";

    navbar.style.backdropFilter = "blur(10px)";

    navbar.style.padding = "24px 8%";
  }
});

// ========================= //
// PARALLAX HERO
// ========================= //

const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
});

// ========================= //
// MAGNETIC BUTTON
// ========================= //

const magneticButtons = document.querySelectorAll(".magnetic");

magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2}px)
    `;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0,0)";
  });
});

// ========================= //
// PRODUCT CARD HOVER
// ========================= //

const cards = document.querySelectorAll(".product-card, .catalog-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 768) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;

    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  });
});

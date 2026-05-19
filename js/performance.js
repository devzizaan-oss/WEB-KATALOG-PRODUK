// ========================= //
// ETHOS PERFORMANCE LAYER
// ========================= //

// ========================= //
// DOM CACHE SYSTEM
// ========================= //

const DOM = {
  hero: document.querySelector(".hero-content"),
  cards: document.querySelectorAll(".product-card, .catalog-card"),
  filterButtons: document.querySelectorAll(".filter-buttons button"),
  navbar: document.querySelector(".navbar"),
  loader: document.querySelector(".loader"),
};

// ========================= //
// RAF OPTIMIZATION FLAGS
// ========================= //

let ticking = false;

// ========================= //
// THROTTLED SCROLL HANDLER
// ========================= //

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });

    ticking = true;
  }
}

// ========================= //
// SCROLL LOGIC (LIGHTWEIGHT)
// ========================= //

function handleScroll() {
  const scrollY = window.scrollY;

  // NAVBAR SHRINK (OPTIMIZED)
  if (DOM.navbar) {
    if (scrollY > 50) {
      DOM.navbar.classList.add("scrolled");
    } else {
      DOM.navbar.classList.remove("scrolled");
    }
  }
}

// ========================= //
// PASSIVE LISTENERS (IMPORTANT)
// ========================= //

window.addEventListener("scroll", onScroll, {
  passive: true,
});

// ========================= //
// IMAGE LAZY ENHANCEMENT
// ========================= //

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        if (img.dataset.src) {
          img.src = img.dataset.src;
        }

        img.classList.add("loaded");

        observer.unobserve(img);
      }
    });
  },
  {
    rootMargin: "200px",
  },
);

images.forEach((img) => {
  imageObserver.observe(img);
});

// ========================= //
// REDUCE MOTION SUPPORT
// ========================= //

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion) {
  document.documentElement.classList.add("reduce-motion");

  // disable heavy animations
  document.querySelectorAll("*").forEach((el) => {
    el.style.animation = "none";
    el.style.transition = "none";
  });
}

// ========================= //
// MEMORY CLEANUP GUARD (OPTIONAL)
// ========================= //

window.addEventListener("beforeunload", () => {
  window.removeEventListener("scroll", onScroll);
});

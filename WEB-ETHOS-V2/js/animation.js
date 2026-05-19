// ========================= //
// SCROLL REVEAL (GLOBAL)
// ========================= //

const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// ========================= //
// SMOOTH SECTION REVEAL (OPTIONAL LAYER)
// ========================= //

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// ========================= //
// REDUCE MOTION SAFETY
// ========================= //

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion) {
  revealElements.forEach((el) => {
    el.style.transition = "none";
  });
}

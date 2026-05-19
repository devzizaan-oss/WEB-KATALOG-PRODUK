// ========================= //
// FULLSCREEN MENU CONTROL
// ========================= //

const menuToggle = document.querySelector(".menu-toggle");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const menuLinks = document.querySelectorAll(".fullscreen-nav a");

// OPEN / CLOSE MENU

menuToggle.addEventListener("click", () => {
  fullscreenMenu.classList.toggle("active");

  // lock scroll saat menu open
  document.body.style.overflow = fullscreenMenu.classList.contains("active")
    ? "hidden"
    : "auto";
});

// CLOSE WHEN CLICK LINK

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    fullscreenMenu.classList.remove("active");

    document.body.style.overflow = "auto";
  });
});

// CLOSE WHEN CLICK OUTSIDE (optional improvement)

fullscreenMenu.addEventListener("click", (e) => {
  if (e.target === fullscreenMenu) {
    fullscreenMenu.classList.remove("active");

    document.body.style.overflow = "auto";
  }
});

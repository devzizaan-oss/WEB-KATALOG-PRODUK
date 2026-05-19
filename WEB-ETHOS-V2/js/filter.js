// ========================= //
// PRODUCT FILTER SYSTEM (STABLE)
// ========================= //

const filterButtons = document.querySelectorAll(".filter-buttons button");

const catalogCards = document.querySelectorAll(".catalog-card");

// ========================= //
// INITIAL STATE
// ========================= //

let activeFilter = "all";

// ========================= //
// APPLY FILTER
// ========================= //

function applyFilter(filter) {
  activeFilter = filter;

  catalogCards.forEach((card) => {
    const category = card.dataset.category;

    const match = filter === "all" || filter === category;

    if (match) {
      card.classList.remove("is-hidden");
      card.classList.add("is-visible");
    } else {
      card.classList.add("is-hidden");
      card.classList.remove("is-visible");
    }
  });
}

// ========================= //
// BUTTON INTERACTION
// ========================= //

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // UI ACTIVE STATE
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    applyFilter(filter);
  });
});

// ========================= //
// INIT DEFAULT
// ========================= //

applyFilter("all");

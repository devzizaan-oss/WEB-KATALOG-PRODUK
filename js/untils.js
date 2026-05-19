// ========================= //
// ETHOS UTILITY CORE
// ========================= //

// ========================= //
// SAFE QUERY SELECTOR
// ========================= //

export const $ = (selector, parent = document) => {
  return parent.querySelector(selector);
};

export const $$ = (selector, parent = document) => {
  return [...parent.querySelectorAll(selector)];
};

// ========================= //
// SAFE EVENT BINDER
// ========================= //

export const on = (el, event, handler, options) => {
  if (!el) return;

  el.addEventListener(event, handler, options);
};

// ========================= //
// THROTTLE (SCROLL OPTIMIZATION)
// ========================= //

export const throttle = (fn, limit = 100) => {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      fn.apply(this, args);

      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};

// ========================= //
// DEBOUNCE (RESIZE / INPUT)
// ========================= //

export const debounce = (fn, delay = 200) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// ========================= //
// CLASS HELPERS
// ========================= //

export const addClass = (el, className) => {
  if (el) el.classList.add(className);
};

export const removeClass = (el, className) => {
  if (el) el.classList.remove(className);
};

export const toggleClass = (el, className) => {
  if (el) el.classList.toggle(className);
};

// ========================= //
// CHECK IF ELEMENT EXISTS IN VIEW
// ========================= //

export const inView = (el, offset = 0) => {
  if (!el) return false;

  const rect = el.getBoundingClientRect();

  return rect.top <= window.innerHeight - offset && rect.bottom >= 0;
};

// ========================= //
// FORMAT PRICE (OPTIONAL FUTURE USE)
// ========================= //

export const formatIDR = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

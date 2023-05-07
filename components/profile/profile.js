const darkModeCheckbox = document.querySelector(
  '[data-js="darkmode-checkbox"]'
);

const main = document.querySelector('[data-js="main"]');
const header = document.querySelector('[data-js="header"]');
const nav = document.querySelector('[data-js="nav"]');

darkModeCheckbox.addEventListener("click", () => {
  main.classList.toggle("dark");
  header.classList.toggle("darkblue");
  nav.classList.toggle("darkblue");
});

// to do: icons light

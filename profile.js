const darkModeCheckbox = document.querySelector(
  '[data-js="darkmode-checkbox"]'
);

const main = document.querySelector('[data-js="main"]');
const header = document.querySelector('[data-js="header"]');

darkModeCheckbox.addEventListener("click", () => {
  main.classList.toggle("dark");
  header.classList.toggle("darkblue");
});

console.log("hello2");

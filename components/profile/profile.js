const darkModeCheckbox = document.querySelector(
  '[data-js="darkmode-checkbox"]'
);

const main = document.querySelector('[data-js="main"]');
const header = document.querySelector('[data-js="header"]');
const nav = document.querySelector('[data-js="nav"]');

const svgindex = document.querySelector('[data-js="svgindex"]');
const svgbookmarkt = document.querySelector('[data-js="svgbookmarks"]');
const svgform = document.querySelector('[data-js="svgform"]');
const svgprofile = document.querySelector('[data-js="svgprofile"]');

darkModeCheckbox.addEventListener("click", () => {
  main.classList.toggle("dark");
  header.classList.toggle("darkblue");
  nav.classList.toggle("darkblue");
  svgindex.classList.toggle("yellowIconDarkMode");
  svgbookmarkt.classList.toggle("yellowIconDarkMode");
  svgform.classList.toggle("yellowIconDarkMode");
});

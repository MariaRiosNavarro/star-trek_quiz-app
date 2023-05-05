// phew… not a lot going on here. Please add some code!

const bookmark = document.querySelector('[data-js="bookmark-button"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

const answer = document.querySelector('[data-js="answer"]');

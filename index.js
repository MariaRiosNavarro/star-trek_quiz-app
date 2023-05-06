const bookmark = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  answerButton.textContent.toggle = "Hide answer";
});

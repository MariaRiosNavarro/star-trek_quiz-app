import { starTrekQuestions } from "./db";

//create Varibles from HTML

//------Bookmark-change  variables

const bookmark = document.querySelector('[data-js="bookmark-button"]');
const path = document.querySelector('[data-js="bookmark-path"]');

//------AnswerButton-change  variables

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

//Event Listener for Bookmark

bookmark.addEventListener("click", () => {
  path.classList.toggle("bookmark-path--active");
});

//Event Listener for Buttons and text change in Button

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer 🚀";
  }
});

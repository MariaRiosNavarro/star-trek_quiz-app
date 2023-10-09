import { starTrekQuestions } from "./db.js";

const homeCardsList = document.querySelector('[data-js="home-card-list"]');

//------Bookmark-change  variables

starTrekQuestions.forEach((question) => {
  const cardListItem = document.createElement("li");
  const article = document.createElement("article");
  const h2Question = document.createElement("h2");
  h2Question.textContent = question.question;
  const buttonAnswer = document.createElement("button");
  const answerText = document.createElement("p");
  answerText.textContent = question.answer;
  const tagList = document.createElement("ul");
  const tagItem = document.createElement("li");
  // question.tags.forEach((tag) => (tagItem.textContent = tag));
  const bookmarktContainer = document.createElement("div");
  const bookmarktButton = document.createElement("button");
  const svg = document.createElement("svg");

  // Add the Dom
  homeCardsList.append(cardListItem);
  cardListItem.append(article);
  article.append(
    h2Question,
    buttonAnswer,
    answerText,
    tagList,
    bookmarktContainer
  );
  tagList.append(tagItem);
  bookmarktContainer.append(bookmarktButton);
  bookmarktButton.append(svg);

  //Add styles
  cardListItem.classList.add("card-list__item");
  article.classList.add("card");
  h2Question.classList.add("card__question");
  buttonAnswer.classList.add("card__button-answer");
  answerText.classList.add("card__answer");
  tagList.classList.add("card__tag-list");
  tagItem.classList.add("card__tag-list-item");
  bookmarktContainer.classList.add("card__button-bookmark");
  bookmarktButton.classList.add("bookmark");

  //add atribute and content

  buttonAnswer.textContent = "Show Answer";
  buttonAnswer.setAttribute("type", "button");
  buttonAnswer.setAttribute("data-js", "button-answer");
  answerText.setAttribute("data-js", "answer");
  bookmarktButton.setAttribute("type", "button");
  bookmarktButton.setAttribute("data-js", "button-bookmark");
  bookmarktButton.setAttribute("aria-label", "bookmark");

  svg.innerHTML = `<svg
  class="bookmark__icon"
  height="100%"
  version="1.1"
  viewBox="0 0 420 644"
  width="100%"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  >
  <path
    class="bookmark-path"
    data-js="bookmark-path"
    d="M212.312 23.5625C83.5374 217.525 40.1043 415.029
  25.0625 618.469C108.569 511.914 182.07 442.069 236.062
  409.625C295.674 373.805 347.014 430.462 397.469
  570.344C363.991 387.802 340.842 209.17 212.312
  23.5625ZM213.344 97.0625L232.062 250.062L277.125
  265.406L236.156 287.156L241.562 335.969L213.844
  288.688L184.656 337.75L190.562 286.375L148.875 265.375L194.125
  250.375L213.344 97.0625Z"
    fill="#1f7fc8"
    fill-opacity="0"
    fill-rule="evenodd"
    opacity="1"
    stroke="#000000"
    stroke-linecap="butt"
    stroke-linejoin="miter"
    stroke-width="11.8"
  />
  </svg>`;

  //Event Listener for Bookmark

  bookmarktButton.addEventListener("click", () => {
    const bookmarkPath = svg.querySelector('[data-js="bookmark-path"]');
    bookmarkPath.classList.toggle("bookmark-path--active");
  });

  //Event Listener for Buttons and text change in Button

  buttonAnswer.addEventListener("click", () => {
    answerText.classList.toggle("card__answer--active");
    if (answerText.classList.contains("card__answer--active")) {
      buttonAnswer.textContent = "Hide Answer";
    } else {
      buttonAnswer.textContent = "Show Answer 🚀";
    }
  });
});

// svg.setAttribute("height", "100%");
// svg.setAttribute("version", "1.1");
// svg.setAttribute("viewBox", "0 0 420 644");
// svg.setAttribute("width", "100%");
// svg.setAttribute("xml:space", "preserve");
// svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
// path.setAttribute("data-js", "bookmark-path");
// path.setAttribute(
//   "d",
//   "M212.312 23.5625C83.5374 217.525 40.1043 415.029 25.0625 618.469C108.569 511.914 182.07 442.069 236.062 409.625C295.674 373.805 347.014 430.462 397.469 570.344C363.991 387.802 340.842 209.17 212.312 23.5625ZM213.344 97.0625L232.062 250.062L277.125 265.406L236.156 287.156L241.562 335.969L213.844 288.688L184.656 337.75L190.562 286.375L148.875 265.375L194.125 250.375L213.344 97.0625Z"
// );
// path.setAttribute("fill", "#1f7fc8");
// path.setAttribute("fill-opacity", "0");
// path.setAttribute("fill-rule", "evenodd");
// path.setAttribute("stroke", "#000000");
// path.setAttribute("stroke-linecap", "butt");
// path.setAttribute("stroke-linejoin", "miter");
// path.setAttribute("stroke-width", "11.8");

// Read all entered data from the input fields (question, answer, tags)

// Generate all DOM element for a card with createElement()
// Insert the form's data as text into the DOM elements
// Append the card to the page, directly below the form

//create the variables:
const form = document.querySelector('[data-js="form-card"]');
const textQuestion = document.querySelector('[data-js="yourquestion"]');
const textAnswer = document.querySelector('[data-js="youranswer"]');
const inputTag = document.querySelector('[data-js="yourtags"]');
const buttonForm = document.querySelector('[data-js="form-button"]');

// Listen the form's submit event
// Prevent the default submit behavior to handle everything within JavaScript

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
});

//Create elements for card-question:
//li>article>h2>button>p>ul(li)div(button(svg(path)))

const cardListItem = document.createElement("li");
const article = document.createElement("article");
const h2Question = document.createElement("h2");
const buttonAnswer = document.createElement("button");
const answerText = document.createElement("p");
const tagList = document.createElement("ul");
const tagItem = document.createElement("li");
const div = document.createElement("div");
const bookmarktButton = document.createElement("button");
const svg = document.createElement("svg");
const path = document.createElement("path");

//Create the DOM of the Question Cards
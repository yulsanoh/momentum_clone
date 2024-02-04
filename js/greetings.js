const greetingSection = document.querySelector("#greeting-section");
const greetingForm = document.querySelector("#greeting-form");
const greetingInput = greetingForm.querySelector("input");
const usernameSection = document.querySelector("#username");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function paintUsername(username) {
  usernameSection.innerText = `Hello ${username}!`;
  greetingSection.classList.add(HIDDEN_CLASSNAME);
  usernameSection.classList.remove(HIDDEN_CLASSNAME);
}

function handleSubmitGreeting(event) {
  event.preventDefault();
  const username = greetingInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUsername(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  paintUsername(savedUsername);
} else {
  greetingForm.addEventListener("submit", handleSubmitGreeting);
}

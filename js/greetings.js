const greetingSection = document.querySelector("#greeting-section");
const greetingForm = document.querySelector("#greeting-form");
const greetingInput = greetingForm.querySelector("input");
const usernameSection = document.querySelector("#username");
const clock = document.querySelector("#clock");
const toDosForm = document.querySelector("#todos-form");
const toDosUl = document.querySelector("#todos");
const h4 = document.querySelector("h4");
const boot = document.querySelector(".boot");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function paintUsername(username) {
  usernameSection.innerText = `안녕하세요, ${username}님!`;
  greetingSection.classList.add(HIDDEN_CLASSNAME);
  usernameSection.classList.remove(HIDDEN_CLASSNAME);
  toDosForm.classList.remove(HIDDEN_CLASSNAME);
  toDosUl.classList.remove(HIDDEN_CLASSNAME);
  h4.classList.add(HIDDEN_CLASSNAME);
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
  boot.style.display = "none";
} else {
  greetingForm.addEventListener("submit", handleSubmitGreeting);
}

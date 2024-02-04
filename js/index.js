const closeButtonSystem = document.querySelector(".computer-greeting #close-button");
const closeButtonNotepad = document.querySelector(".notepad-todos #close-button");
const system = document.querySelector(".computer-greeting");
const notepad = document.querySelector(".notepad-todos");
const systemIcon = document.querySelector("#system");
const notepadIcon = document.querySelector("#notepad");
const startMenuButton = document.querySelector("#start-menu-button");
const startMenu = document.querySelector(".start-menu");

closeButtonSystem.addEventListener("click", function() {
  system.classList.add("hidden");
})

closeButtonNotepad.addEventListener("click", function() {
  notepad.classList.add("hidden");
})

systemIcon.addEventListener("click", function() {
  system.classList.remove("hidden");
})

notepadIcon.addEventListener("click", function() {
  notepad.classList.remove("hidden");
})

startMenuButton.addEventListener("click", function() {
  startMenu.classList.toggle("hidden");
})
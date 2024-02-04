const toDosInput = document.querySelector("#todos-input");
const toDosList = document.querySelector("#todos");

let toDo = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDo));
}

function removeToDos(event) {
  const li = event.target.parentElement;

  toDo = toDo.filter((data) => {
    return Number(li.id) !== data.id;
  });

  saveToDos();
  li.remove();
}

function printToDos(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.addEventListener("click", removeToDos);

  li.id = newToDo.id;
  span.innerText = `* ${newToDo.todo}`;
  button.style.backgroundImage = `url("img/close.png")`;
  li.appendChild(span);
  li.appendChild(button);
  toDosList.appendChild(li);
}

function handleSubmitToDos(event) {
  event.preventDefault();
  const newToDo = {
    id: Date.now(),
    todo: toDosInput.value,
  };

  // saves part
  toDo.push(newToDo);
  saveToDos();
  // prints part
  printToDos(newToDo);
  toDosInput.value = "";
}

toDosForm.addEventListener("submit", handleSubmitToDos);

const savedToDos = localStorage.getItem("todos");

if (savedToDos) {
  const convertedToDos = JSON.parse(savedToDos);
  toDo = convertedToDos;
  convertedToDos.forEach((data) => {
    printToDos(data);
  });
}

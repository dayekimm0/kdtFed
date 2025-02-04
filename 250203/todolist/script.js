const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.append(span, button);
    li.id = todo.id;
    ul.prepend(li);
  }
};

const handler = (event) => {
  event.preventDefault();
  const todo = {
    id: Date.now(),
    text: userInput.value,
  };
  todos.push(todo);
  addItem(todo);
  if (todo.text !== "") {
    save();
  }
  userInput.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();
form.addEventListener("submit", handler);

// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);

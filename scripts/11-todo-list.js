const todoList = [];

function renderTodolist() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `<div>
          ${name}</div>  <div>${dueDate}</div>
          <button onclick="deleteTodo(${i});">
          Delete</button>`;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function show() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date");
  const dueDate = dateInputElement.value;
  todoList.push({
    name,
    dueDate,
  });
  inputElement.value = "";
  dateInputElement.value = "";
  renderTodolist();
  saveStorage();
}

function saveStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodolist();
  saveStorage();
}

// Load todoList from local storage when page loads
onload = ()  => {
  const storedTodoList = localStorage.getItem("todoList");
  if (storedTodoList) {
    todoList.push(...JSON.parse(storedTodoList));
    renderTodolist();
  }
};

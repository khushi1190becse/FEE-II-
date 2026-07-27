
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const completed = JSON.parse(localStorage.getItem("completed")) || [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const completedList = document.getElementById("completedList");



function saveData() {
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("completed", JSON.stringify(completed));
}


function renderTask(task, isCompleted = false) {
  const item = document.createElement("div");
  item.className = isCompleted ? "completed-item" : "todo-item";

  const p = document.createElement("p");
  p.textContent = task;



  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";

  delBtn.addEventListener("click", () => {

    if (isCompleted) {
      const index = completed.indexOf(task);
      if (index > -1) completed.splice(index, 1);

    } else {
      const index = todos.indexOf(task);
      if (index > -1) todos.splice(index, 1);
    }

    saveData(); 
    item.remove();
  });



  if (!isCompleted) {

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";

    completeBtn.addEventListener("click", () => {

      const index = todos.indexOf(task);

      if (index > -1) {
        todos.splice(index, 1);
      }

      completed.push(task);

      saveData(); 
      item.remove();
      renderTask(task, true);

    });


    item.append(p, delBtn, completeBtn);

  } else {

    item.append(p, delBtn);

  }


  if (isCompleted) {
    completedList.append(item);
  } else {
    todoList.append(item);
  }
}




function addTodo() {

  const task = input.value.trim();

  if (!task) return;


  todos.push(task);

  saveData(); 
  renderTask(task);

  input.value = "";
  input.focus();
}



todos.forEach(task => {
  renderTask(task);
});

completed.forEach(task => {
  renderTask(task, true);
});




addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    addTodo();
  }

});
let todoItems = [];
let projects = [];
function addTodo(todoItem) {
  todoItems.push(todoItem);
}

function removeTodo(todoItem) {
  todoItems[todoItem.details.index] = "";
}

function addProject(project) {
  projects.push(project);
}

function removeProject(project) {
  projects[project.details.index] = "";
}

export { addTodo, removeTodo, addProject, removeProject };

let todoItems = [];
let projects = [];
function deleteFromMasterListProjects() {
  projects.splice(projects.indexOf(this), 1);
}

function deleteFromMasterListTodoItems() {
  todoItems.splice(todoItems.indexOf(this), 1);
}

function addTodo(todoItem) {
  todoItems.push(todoItem);
  Object.assign(todoItem, { deleteFromMasterListTodoItems });
  console.log(todoItem);
}

function addProject(project) {
  projects.push(project);
  Object.assign(project, { deleteFromMasterListProjects });
}

/* function debug() {
  console.log("items \n", todoItems[0]);
  console.log("projects \n", projects[0]);
}

function debug2() {
  todoItems[0].deleteFromMasterListTodoItems();
  projects[0].deleteFromMasterListProjects();
} */

export {
  addTodo,
  addProject,
  // debug, debug2
};

import todoItemForm from "./todoItemForm";
import createTodo from "./createTodo";
import createProject from "./createProject";
import { debug, debug2 } from "./masterList";
function init() {
  const projectDetails = {
    title: "test title",
    index: 240,
  };

  const projectDetails2 = {
    title: "test title2",
    index: 240,
  };

  const projectDetails3 = {
    title: "test title3",
    index: 240,
  };

  const projectDetails4 = {
    title: "test title4",
    index: 240,
  };

  const projectDetails5 = {
    title: "test title4",
    index: 240,
  };

  const todoDetails = {
    title: "test title",
    index: 240,
    dueDate: 12934,
    description: "jashdkjashd",
    priority: "High",
  };

  createProject(projectDetails);
  createProject(projectDetails2);
  createProject(projectDetails3);
  createProject(projectDetails4);
  createProject(projectDetails5);
  createTodo(todoDetails);

  const mainContainer = document.querySelector(".maincontainer");
  mainContainer.appendChild(todoItemForm("Create Task", debug2()));
}

export default init;

import projectFactory from "./projectFactory";

function createProject(details) {
  const newProject = projectFactory(details);
  masterList.addProject(newTodo);
}

export default createProject;

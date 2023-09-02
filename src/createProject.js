import projectFactory from "./project";
import { addProject } from "./masterList";
function createProject(details) {
  const newProject = projectFactory(details);
  addProject(newProject);
}

export default createProject;

import createProjectDiv from "./createProjectDiv";

const projectFactory = (initialDetails) => {
  let projectDetails = initialDetails;

  const viewWindowDiv = createProjectDiv(projectDetails);
  viewWindowDiv.dataset.project = projectDetails.index;
  let taskArray = [];
  function deleteFromProject() {
    taskArray.splice(taskArray.indexOf(this), 1);
  }

  const addToProjectList = () => {
    const projectList = document.querySelector(".list.main");
    const projectDiv = createProjectDiv(projectDetails);
    projectList.appendChild(projectDiv);
  };

  const showTasks = () => {
    const viewWindow = document.querySelector(".view.main");

    viewWindow.appendChild(viewWindowDiv);
  };

  const addTask = (todoItem) => {
    taskArray.push(todoItem);
    Object.assign(todoItem, deleteFromProject);
  };

  return {
    get details() {
      return projectDetails;
    },
    set details(value) {
      projectDetails = value;
    },
    addToProjectList,
    addTask,
    showTasks,
  };
};
export default projectFactory;

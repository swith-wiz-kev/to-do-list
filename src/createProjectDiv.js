function createProjectDiv(details) {
  const div = document.createElement("div");
  div.classList.add("project");
  div.textContent = details.title;
  return div;
}

export default createProjectDiv;

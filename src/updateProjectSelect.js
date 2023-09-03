import createElementWithProperty from "./createElementWithProperty";
function updateProjectSelect(selectElement, projectOptions) {
  function removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  removeAllChildren(selectElement);

  projectOptions.forEach((project, index) => {
    const option = createElementWithProperty("option", {
      value: index.toString(),
      textContent: project.details.title,
    });
    selectElement.appendChild(option);
  });
}
export default updateProjectSelect;

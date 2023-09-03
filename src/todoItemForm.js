import createElementWithProperty from "./createElementWithProperty";
import updateProjectSelect from "./updateProjectSelect";
function createTodoItemForm(header, projectOptions) {
  const todoItemForm = {
    container: createElementWithProperty("form", {
      class: "todo-container",
      action: "",
      method: "post",
    }),
    closeButton: createElementWithProperty("button", {
      class: "close-button",
      type: "button",
      textContent: "X",
    }),
    header: createElementWithProperty("legend", {
      class: "header",
      textContent: header,
    }),
    inputSection: createElementWithProperty("div", {
      class: "input-container",
    }),
    inputElements1: createElementWithProperty("div", {
      class: "input-elements n1",
    }),
    inputElements2: createElementWithProperty("div", {
      class: "input-elements n2",
    }),
    inputElements3: createElementWithProperty("div", {
      class: "input-elements n3",
    }),
    inputElements4: createElementWithProperty("div", {
      class: "input-elements n4",
    }),
    inputElements5: createElementWithProperty("div", {
      class: "input-elements n5",
    }),
    inputLabelTitle: createElementWithProperty("label", {
      for: "title",
      textContent: "Task Name",
    }),
    inputTitle: createElementWithProperty("input", {
      type: "text",
      id: "title",
      name: "title",
      required: "",
    }),
    inputLabelDescription: createElementWithProperty("label", {
      for: "description",
      textContent: "Description",
    }),
    inputDescription: createElementWithProperty("input", {
      type: "text",
      id: "description",
      name: "description",
      required: "",
    }),
    inputLabelDate: createElementWithProperty("label", {
      for: "date",
      textContent: "Date",
    }),
    inputDate: createElementWithProperty("input", {
      type: "text",
      id: "date",
      name: "date",
      required: "",
    }),
    priorityHeader: createElementWithProperty("legend", {
      class: "priority",
      textContent: "Select Priority",
    }),
    inputRadioHigh: createElementWithProperty("input", {
      type: "radio",
      id: "high",
      name: "priority",
      value: "high",
    }),
    inputRadioLabelHigh: createElementWithProperty("label", {
      for: "high",
      textContent: "High",
    }),
    inputRadioNormal: createElementWithProperty("input", {
      type: "radio",
      id: "normal",
      name: "priority",
      value: "normal",
      checked: "",
    }),
    inputRadioLabelNormal: createElementWithProperty("label", {
      for: "normal",
      textContent: "Normal",
    }),
    inputRadioLow: createElementWithProperty("input", {
      type: "radio",
      id: "low",
      name: "priority",
      value: "low",
    }),
    inputRadioLabelLow: createElementWithProperty("label", {
      for: "low",
      textContent: "Low",
    }),
    inputNewProject: createElementWithProperty("input", {
      type: "text",
      id: "newproject",
      name: "newproject",
    }),
    newProjectButton: createElementWithProperty("button", {
      class: "newproject-button",
      type: "button",
      textContent: "New Project",
    }),
    projectLabel: createElementWithProperty("label", {
      for: "project-select",
      textContent: "Select Project",
    }),
    projectSelect: createElementWithProperty("select", {
      id: "project-select",
      size: "5",
    }),
    // new project button and options
  };

  todoItemForm.container.appendChild(todoItemForm.closeButton);
  todoItemForm.container.appendChild(todoItemForm.header);
  todoItemForm.container.appendChild(todoItemForm.header);
  todoItemForm.container.appendChild(todoItemForm.inputSection);
  todoItemForm.inputElements1.appendChild(todoItemForm.inputLabelTitle);
  todoItemForm.inputElements1.appendChild(todoItemForm.inputTitle);
  todoItemForm.inputElements2.appendChild(todoItemForm.inputLabelDescription);
  todoItemForm.inputElements2.appendChild(todoItemForm.inputDescription);
  todoItemForm.inputElements3.appendChild(todoItemForm.inputLabelDate);
  todoItemForm.inputElements3.appendChild(todoItemForm.inputDate);
  todoItemForm.inputSection.appendChild(todoItemForm.inputElements1);
  todoItemForm.inputSection.appendChild(todoItemForm.inputElements2);
  todoItemForm.inputSection.appendChild(todoItemForm.inputElements3);
  todoItemForm.inputSection.appendChild(todoItemForm.priorityHeader);
  todoItemForm.inputElements4.appendChild(todoItemForm.inputRadioHigh);
  todoItemForm.inputElements4.appendChild(todoItemForm.inputRadioLabelHigh);
  todoItemForm.inputElements4.appendChild(todoItemForm.inputRadioNormal);
  todoItemForm.inputElements4.appendChild(todoItemForm.inputRadioLabelNormal);
  todoItemForm.inputElements4.appendChild(todoItemForm.inputRadioLow);
  todoItemForm.inputElements4.appendChild(todoItemForm.inputRadioLabelLow);
  todoItemForm.inputSection.appendChild(todoItemForm.inputElements4);
  todoItemForm.inputElements5.appendChild(todoItemForm.inputNewProject);
  todoItemForm.inputElements5.appendChild(todoItemForm.newProjectButton);
  todoItemForm.inputSection.appendChild(todoItemForm.inputElements5);
  todoItemForm.inputSection.appendChild(todoItemForm.projectLabel);
  updateProjectSelect(todoItemForm.projectSelect, projectOptions);
  todoItemForm.inputSection.appendChild(todoItemForm.projectSelect);

  return todoItemForm.container;
}

export default createTodoItemForm;

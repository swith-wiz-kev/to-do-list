function createElementWithProperty(elementType, elementProperties) {
  const element = document.createElement(elementType);
  for (const prop in elementProperties) {
    if (prop === "textContent") {
      element.textContent = elementProperties[prop];
    } else if (prop.slice(0, 7) === "dataset") {
      element.dataset[prop.slice(7).toLowerCase()] = elementProperties[prop];
    } else {
      element.setAttribute(prop, elementProperties[prop]);
    }
  }
  return element;
}

export default createElementWithProperty;

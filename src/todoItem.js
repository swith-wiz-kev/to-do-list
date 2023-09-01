const todoItemFactory = (title, description, dueDate, priority, project) => {
  const todoDetails = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
  };

  const addToList = (todoDetails, project) => {};
  return { addToList };
};
export default todoItemFactory;

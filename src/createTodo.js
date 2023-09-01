import todoItemFactory from "./todoItem";

function createTodo(details) {
  const newTodo = todoItemFactory(details);
  masterList.addTodo(newTodo);
}

export default createTodo;

import todoItemFactory from "./todoItem";
import { addTodo } from "./masterList";
function createTodo(details) {
  const newTodo = todoItemFactory(details);
  addTodo(newTodo);
}

export default createTodo;

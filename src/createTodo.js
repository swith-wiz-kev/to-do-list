import todoItemFactory from "./todoItem";
import { addTodo } from "./masterList";
function createTodo(details) {
  const newTodo = todoItemFactory(details);
  addTodo(newTodo);
  if (!(details.project === undefined)) {
    details.project.addTask(newTodo);
  }
}

export default createTodo;

import { useContext } from "react";
import { ToDoItem } from "./todo-item";
import { ToDoContext } from "../todo-context";

export const List = () => {
  const { todos, currentFilter, currentCategories } = useContext(ToDoContext);

  const filteredTodos = todos.filter((todo) => {
    const matchesStatus =
      currentFilter === "all"
        ? true
        : currentFilter === "active"
        ? !todo.complited
        : todo.complited;

    const matchesCategory =
      currentCategories === "all" ? true : todo.category === currentCategories;

    return matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
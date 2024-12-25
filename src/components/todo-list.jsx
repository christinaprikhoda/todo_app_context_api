import { List } from "./list";
import { ThemeSwithcher } from "./theme-switcher.jsx";
import { ToDoAdd } from "./todo-add";
import { ToDoFilter } from "./todo-filter";

export const ToDoList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-6">
        <div>
          <ToDoAdd />
          <ToDoFilter />
        </div>
        <div>
          <ThemeSwithcher />
          <List />
        </div>
      </div>
    </div>
  );
};
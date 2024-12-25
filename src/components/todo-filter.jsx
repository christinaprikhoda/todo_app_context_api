import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoFilter = () => {
  const { filters, currentFilter, onFilter, categories, currentCategories, onCategory } = useContext(ToDoContext);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
      <div className="flex items-center justify-center gap-5">
        <p className="text-indigo-600 dark:text-indigo-400">
          Current filter: <strong>{currentFilter}</strong>
        </p>
        {filters.map((filter) => (
          <label key={filter} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <input
              value={filter}
              type="radio"
              name="filter"
              checked={filter === currentFilter}
              onChange={(e) => onFilter(e.target.value)}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <span>{filter}</span>
          </label>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5">
        <p className="text-indigo-600 dark:text-indigo-400">
          Current category: <strong>{currentCategories}</strong>
        </p>
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <input
              value={category}
              type="radio"
              name="category"
              checked={category === currentCategories}
              onChange={(e) => onCategory(e.target.value)}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
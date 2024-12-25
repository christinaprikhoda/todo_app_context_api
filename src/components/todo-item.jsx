import { useContext, useState } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoItem = ({ todo }) => {
  const {
    onUpdate,
    onAddSubTask,
    onDelete,
    onRemoveSubTask,
    onCompleteSubTask,
  } = useContext(ToDoContext);
  const [isAddingSubtask, setIsAddingSubtask] = useState(false);
  const [newSubTaskText, setNewSubTaskText] = useState("");

  const hanndleSubmitSubTask = (e) => {
    e.preventDefault();
    onAddSubTask(todo.id, newSubTaskText);
    setNewSubTaskText("");
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-200">
      <div className="flex items-center justify-between p-4">
        <div className="space-y-2">
          <p className="text-gray-900 dark:text-gray-300 text-lg font-medium">
            {todo.text}
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-lg font-medium">
            {todo.description}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-500">
              Category:
            </span>
            <span className="text-sm text-gray-800 dark:text-gray-300">
              {todo.category || "No Category"}
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onUpdate(todo.id)}
            className="px-3 py-1 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600 transition-colors duration-200"
          >
            {todo.complited ? "Cancel" : "Complete"}
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="px-3 py-1 text-sm font-semibold text-white bg-indigo-400 rounded-md shadow hover:bg-indigo-500 transition-colors duration-200"
          >
            Delete
          </button>
          <button
            onClick={() => setIsAddingSubtask(!isAddingSubtask)}
            className="px-3 py-1 text-sm font-semibold text-white bg-emerald-500 rounded-md shadow hover:bg-emerald-600 transition-colors duration-200"
          >
            {isAddingSubtask ? "Close" : "ADD"}
          </button>
        </div>
      </div>
      {isAddingSubtask && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subtasks:
            </h3>
            <ul className="space-y-2">
              {todo.subTasks &&
                todo.subTasks.map((subtask) => (
                  <li
                    key={subtask.id}
                    className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-md"
                  >
                    <span className="text-sm text-gray-800 dark:text-gray-200">
                      {subtask.text}
                    </span>
                    <button
                      onClick={() => onCompleteSubTask(todo.id, subtask.id)}
                      className={`px-2 py-1 text-sm font-semibold ${
                        subtask.complited
                          ? "text-gray-500 dark:text-gray-400"
                          : "text-emerald-500 hover:text-emerald-600"
                      }`}
                    >
                      {subtask.complited ? "Cancel" : "Complete"}
                    </button>
                    <button
                      onClick={() => onRemoveSubTask(todo.id, subtask.id)}
                      className="text-xs text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50">
            <form
              onSubmit={hanndleSubmitSubTask}
              className="flex items-center gap-2"
            >
              <div className="flex-1">
                <input
                  onChange={(e) => setNewSubTaskText(e.target.value)}
                  value={newSubTaskText}
                  type="text"
                  placeholder="Add a subtask..."
                  className="w-full p-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors duration-200"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600 transition-colors duration-200"
              >
                Add Subtask
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

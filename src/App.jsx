import { useState, useEffect } from "react";
import { ToDoList } from "./components/todo-list";
import { ToDoContext } from "./todo-context";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 101,
      text: "css task",
      description: "do something",
      complited: true,
      category: "work",
      subTasks: [],
    },
    {
      id: 102,
      text: "js task",
      description: "do something",
      complited: false,
      category: "personal",
      subTasks: [],
    },
    {
      id: 103,
      text: "react task",
      description: "do something",
      complited: true,
      category: "work",
      subTasks: [],
    },
    {
      id: 104,
      text: "node task",
      description: "do something",
      complited: false,
      category: "personal",
      subTasks: [],
    },
  ]);

  const [currentFilter, setCurrentFilter] = useState("all");
  const [filters, setFilters] = useState(["all", "active", "complited"]);

  const [categories] = useState(["work", "personal", "finance"]);
  const [currentCategories, setCurrentCategories] = useState("all");

  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complited: !todo.complited } : todo
      )
    );
  };

  const handleAdd = (todo) => {
    setTodos([...todos, { ...todo, complited: false, id: Date.now() }]);
  };

  const hanndleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddSubtask = (todoId, subtask) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == todoId) {
          return {
            ...todo,
            subTasks: [
              ...todo.subTasks,
              {
                id: Date.now(),
                text: subtask,
                complited: false,
              },
            ],
          };
        }
        return todo;
      })
    );
  };

  const handleRemoveSubTask = (todoId, subTaskId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            subTasks: todo.subTasks.filter((todo) => todo.id !== subTaskId),
          };
        }

        return todo;
      })
    );
  };

  const handleComplitedSubTask = (todoId, subTaskId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == todoId) {
          return {
            ...todo,
            subTasks: todo.subTasks.map((subTask) =>
              subTask.id === subTaskId
                ? { ...subTask, complited: !subTask.complited }
                : subTask
            ),
          };
        }
        return todo;
      })
    );
  };

  const toggleMode = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        onUpdate: handleUpdate,
        filters,
        currentFilter,
        onFilter: setCurrentFilter,
        categories,
        currentCategories,
        onCategory: setCurrentCategories,
        onAdd: handleAdd,
        onDelete: hanndleRemove,
        onToggle: toggleMode,
        onAddSubTask: handleAddSubtask,
        onRemoveSubTask: handleRemoveSubTask,
        onCompleteSubTask: handleComplitedSubTask,
      }}
    >
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <ToDoList />
      </div>
    </ToDoContext.Provider>
  );
}

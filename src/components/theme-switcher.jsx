import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ThemeSwithcher = () => {
  const { onToggle } = useContext(ToDoContext);
  return (
    <button
      onClick={onToggle}
      className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded mt-4 transition-colors duration-200"
    >
      Switch Mode
    </button>
  );
};
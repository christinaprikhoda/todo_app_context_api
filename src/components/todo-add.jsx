import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToDoContext } from "../todo-context";

export const ToDoAdd = () => {
  const { onAdd } = useContext(ToDoContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAdd(data);
    reset();
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">Add To Do</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p id="message" className="text-sm text-amber-600 dark:text-amber-400"></p>

        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-400 mb-1">Text</label>
          {errors.text && (
            <p className="text-red-500 p-2 my-2">{errors.text.message}</p>
          )}
          <input
            {...register("text", { required: "Please fill in the text" })}
            type="text"
            className="p-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-400 mb-1">Description</label>
          <input
            {...register("description")}
            type="text"
            className="p-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-400 mb-1">Category</label>
          <select
            {...register("category", { required: "Please select a category" })}
            className="p-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="finance">Finance</option>
          </select>
          {errors.category && (
            <p className="text-red-500 p-2 my-2">{errors.category.message}</p>
          )}
        </div>

        <button className="w-full px-4 py-2 text-lg font-semibold text-white bg-indigo-600 dark:bg-indigo-800 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-700 transition-colors duration-200">
          Save
        </button>
      </form>
    </div>
  );
};
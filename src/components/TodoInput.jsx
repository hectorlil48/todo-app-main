import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    onAddTodo(inputText.trim());
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mb-6">
      <div className="relative">
        <label htmlFor="todo-input" className="sr-only">
          Add a new todo
        </label>
        <input
          type="text"
          value={inputText}
          id="todo-input"
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Create a new todo..."
          className="w-full bg-white font-display dark:bg-input rounded-[5px] py-[14px] pl-[52px] pr-4 placeholder:text-xs text-xs sm:text-lg font-normal tracking-[-0.17px] sm:tracking-[-0.25px] placeholder:font-normal placeholder:tracking-[-0.17px] placeholder-gray-400 text-inputText dark:text-inputText dark:placeholder-gray-600 transition-all duration-500 focus:outline-none"
        />
        {/* Circle checkbox for visual design */}
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
          <div className="w-5 h-5 rounded-full border border-purple-100 dark:border-purple-800 transition-all duration-500" />
        </div>
      </div>
    </form>
  );
}

export default TodoInput;

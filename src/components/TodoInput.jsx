import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    onAddTodo(inputValue.trim());
    setInputText("");
  };
  return (
    <form onSubmit={handleChange} className="w-full mb-6">
      <div className="relative">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Create a new todo..."
          className="w-full bg-white font-display dark:bg-input rounded-[5px] py-[14px] pl-[52px] pr-4 placeholder:text-xs placeholder:font-normal placeholder:tracking-[-0.17px] placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-500"
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

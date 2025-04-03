import { useState, useCallback } from "react";

const TodoInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = useCallback(() => {
    onAddTask(task);
    setTask("");
  }, [task, onAddTask]);

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Enter a task"
        className="border p-2 mr-2 rounded-lg"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg cursor-pointer font-bold"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;

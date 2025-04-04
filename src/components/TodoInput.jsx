function TodoInput({ task, onChange, onSubmit, isEditing }) {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Enter a task"
        className="border p-2 mr-2 rounded-lg"
        value={task}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className={`px-4 py-2 rounded-lg font-bold border-2 ${
          isEditing
            ? "text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white"
            : "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        }`}
        onClick={onSubmit}
      >
        {isEditing ? "Edit Task" : "Add Task"}
      </button>
    </div>
  );
}

export default TodoInput;

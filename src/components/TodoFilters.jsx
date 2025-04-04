function TodoFilters({ setFilter }) {
  return (
    <div className="flex justify-center mb-4">
      <button
        className="bg-violet-400 hover:bg-violet-600 text-white px-2 py-1 mr-2 rounded-lg cursor-pointer font-bold"
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className="bg-red-400 hover:bg-red-600 text-white px-2 py-1 mr-2 rounded-lg cursor-pointer font-bold"
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className="bg-green-400 hover:bg-green-600 text-white px-2 py-1 mr-2 rounded-lg cursor-pointer font-bold"
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;

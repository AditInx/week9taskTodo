const TodoFilters = ({ filter, setFilter }) => {
    return (
      <div className="flex justify-center mb-4">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            className={`px-2 py-1 mr-2 rounded-lg cursor-pointer font-bold ${
              type === "all" ? "bg-violet-400 hover:bg-violet-600" :
              type === "active" ? "bg-red-400 hover:bg-red-600" :
              "bg-green-400 hover:bg-green-600"
            } text-white`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    );
  };
  
  export default TodoFilters;
  
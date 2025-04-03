import { useState, useMemo } from "react";
import { useTodo } from "./hooks/useTodo";
import TodoInput from "./components/TodoInput.jsx";
import TodoFilters from "./components/TodoFilters.jsx";
import TodoList from "./components/TodoList.jsx";
import './App.css'
function App() {
  const { todoList, handleAddTask, handleCompleteTask, handleRemoveTask } = useTodo();
  const [filter, setFilter] = useState("all");

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) => {
      if (filter === "all") return true;
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
    });
  }, [todoList, filter]);

  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-lg my-4">To-Do List</h2>

      <TodoInput onAddTask={handleAddTask} />
      <TodoFilters filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} onComplete={handleCompleteTask} onRemove={handleRemoveTask} />
    </div>
  );
}

export default App;

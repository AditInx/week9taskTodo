import React, { Suspense, useReducer, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addTodo, editTodo } from "./features/todoSlice";
import { formReducer, initialState } from "./reducers/formReducer";

const TodoInput = React.lazy(() => import("./components/TodoInput"));
const TodoFilters = React.lazy(() => import("./components/TodoFilters"));
const TodoList = React.lazy(() => import("./components/TodoList"));

function App() {
  const dispatchRedux = useDispatch();
  const todoList = useSelector((state) => state.todo.value);
  const [filter, setFilter] = React.useState("all");
  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) => {
      if (filter === "all") return true;
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
    });
  }, [todoList, filter]);

  const handleSubmit = () => {
    const text = formState.taskInput.trim();
    if (!text) return;

    if (formState.isEditing) {
      dispatchRedux(editTodo({ id: formState.editId, text }));
    } else {
      dispatchRedux(addTodo(text));
    }

    dispatchForm({ type: "RESET" });
  };

  const handleEdit = (todo) => {
    dispatchForm({
      type: "START_EDIT",
      payload: { id: todo.id, text: todo.text },
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-lg my-4">To-Do List</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoInput
          task={formState.taskInput}
          onChange={(val) => dispatchForm({ type: "SET_INPUT", payload: val })}
          onSubmit={handleSubmit}
          isEditing={formState.isEditing}
        />
        <TodoFilters setFilter={setFilter} />
        <TodoList
          filteredTodos={filteredTodos}
          dispatchRedux={dispatchRedux}
          onEdit={handleEdit}
        />
      </Suspense>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addTodo, completeTodo, removeTodo } from "../features/todoSlice";

export const useTodo = () => {
  const todoList = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const handleAddTask = useCallback(
    (task) => {
      if (task.trim() === "") return;
      dispatch(addTodo(task));
    },
    [dispatch]
  );

  const handleCompleteTask = useCallback(
    (id) => dispatch(completeTodo(id)),
    [dispatch]
  );

  const handleRemoveTask = useCallback(
    (id) => dispatch(removeTodo(id)),
    [dispatch]
  );

  return { todoList, handleAddTask, handleCompleteTask, handleRemoveTask };
};

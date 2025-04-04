import { completeTodo, removeTodo } from "../features/todoSlice";

function TodoList({ filteredTodos, dispatchRedux, onEdit }) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Task</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredTodos.map((todo) => (
          <tr key={todo.id} className="text-center">
            <td className="border p-2">{todo.text}</td>
            <td className="border p-2">
              {todo.completed ? "Completed" : "Active"}
            </td>
            <td className="border p-2">
              <button
                className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white border-1 px-2 py-1 mr-2 rounded-lg font-bold"
                onClick={() => dispatchRedux(completeTodo(todo.id))}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white border-1 px-2 py-1 mr-2 rounded-lg font-bold"
                onClick={() => onEdit(todo)}
              >
                Edit
              </button>
              <button
                className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white border-1 px-2 py-1 rounded-lg font-bold"
                onClick={() => dispatchRedux(removeTodo(todo.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;

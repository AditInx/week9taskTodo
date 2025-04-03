const TodoItem = ({ todo, onComplete, onRemove }) => {
    return (
      <tr className="text-center">
        <td className="border p-2">{todo.text}</td>
        <td className="border p-2">{todo.completed ? "Completed" : "Active"}</td>
        <td className="border p-2">
          <button
            className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white border-2 px-2 py-1 mr-2 rounded-lg cursor-pointer font-bold"
            onClick={() => onComplete(todo.id)}
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button
            className="border-red-500 border-2 text-red-500 hover:bg-red-500 hover:text-white px-2 py-1 rounded-lg cursor-pointer font-bold"
            onClick={() => onRemove(todo.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  export default TodoItem;
  